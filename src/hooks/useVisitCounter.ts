import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

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

// Функция для генерации простого уникального ID
const generateVisitorId = (): string => {
  if (typeof window === "undefined") return "server-id";
  let id = localStorage.getItem("site_visitor_id");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("site_visitor_id", id);
  }
  return id;
};

export const useVisitCounter = (pageName: string = "home") => {
  const [count, setCount] = useState<number>(0);
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

    const initCounter = async () => {
      try {
        const visitorId = generateVisitorId();

        // 1. Регистрируем посетителя (игнорируем результат, так как БД сама защитит от дублей)
        // Мы просто вызываем функцию, чтобы сработал триггер UNIQUE constraint
        const { error: regError } = await client.rpc("REGISTER_VISITOR", {
          page: pageName,
          visitor_id: visitorId,
        });

        if (regError) throw regError;

        // 2. Получаем актуальное количество уникальных пользователей
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { data: countData, error: countError } = await client.rpc(
          "GET_UNIQUE_COUNT",
          { page: pageName },
        );

        if (countError) throw countError;

        if (isMounted) {
          setCount(Number(countData));
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

    void initCounter();

    return () => {
      isMounted = false;
    };
  }, [pageName]);

  return { count, loading, error };
};
