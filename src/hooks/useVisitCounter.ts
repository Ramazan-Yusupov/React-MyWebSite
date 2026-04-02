import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

// ... (код подключения и generateVisitorId без изменений)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
let supabaseClient: SupabaseClient | null = null;

const getSupabaseClient = (): SupabaseClient | null => {
  if (!supabaseUrl || !supabaseKey) return null;
  if (!supabaseClient) {
    supabaseClient = createClient(supabaseUrl, supabaseKey);
  }
  return supabaseClient;
};

const generateVisitorId = (): string => {
  if (typeof window === "undefined") return "server-id";
  let id = localStorage.getItem("site_visitor_id");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("site_visitor_id", id);
  }
  return id;
};

// Обновленный тип
export interface VisitStats {
  uniqueTotal: number;
  today: number;
  week: number;
  month: number;
  history: { day: string; count: number }[]; // Данные для графика
}

export const useVisitCounter = (pageName: string = "home") => {
  const [stats, setStats] = useState<VisitStats>({
    uniqueTotal: 0,
    today: 0,
    week: 0,
    month: 0,
    history: [],
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const client = getSupabaseClient();

    if (!client) {
      setError("Missing Supabase env variables");
      setLoading(false);
      return;
    }

    const fetchStats = async () => {
      try {
        const visitorId = generateVisitorId();

        // 1 & 2. Логирование (без изменений)
        await client.rpc("REGISTER_VISITOR", {
          p_page: pageName,
          p_visitor_id: visitorId,
        });
        await client.rpc("LOG_VISIT_EVENT", {
          page: pageName,
          visitor_id: visitorId,
        });

        // 3. Уникальные
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { data: uniqueData, error: uniqueError } = await client.rpc(
          "GET_UNIQUE_COUNT",
          { p_page: pageName },
        );

        // 4. Активность (сводная)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { data: activityData, error: activityError } = await client.rpc(
          "GET_ACTIVITY_STATS",
          { p_page: pageName },
        );

        // 5. История для графика (Новое!)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { data: historyData, error: historyError } = await client.rpc(
          "GET_VISIT_HISTORY",
          {
            page: pageName,
            days_count: 14,
          },
        );

        if (uniqueError || activityError || historyError) {
          // eslint-disable-next-line @typescript-eslint/only-throw-error
          throw uniqueError || activityError || historyError;
        }

        if (isMounted) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const activity = Array.isArray(activityData)
            ? activityData[0]
            : activityData;

          // Преобразуем данные истории в формат для Recharts
          const formattedHistory = Array.isArray(historyData)
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
              historyData.map((item: any) => ({
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                day: item.day_date,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                count: Number(item.visit_count),
              }))
            : [];

          setStats({
            uniqueTotal: Number(uniqueData),
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            today: Number(activity?.today || 0),
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            week: Number(activity?.this_week || 0),
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            month: Number(activity?.this_month || 0),
            history: formattedHistory,
          });
          setError(null);
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : "Unknown error";
        if (isMounted) {
          setError(msg);
          console.error("Visit counter error:", err);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    void fetchStats();

    return () => {
      isMounted = false;
    };
  }, [pageName]);

  return { stats, loading, error };
};
