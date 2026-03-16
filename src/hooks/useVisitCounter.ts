import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { useEffect, useRef, useState } from "react";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabaseClient: SupabaseClient | null = null;

const getSupabaseClient = (): SupabaseClient | null => {
  if (!supabaseUrl || !supabaseKey) {
    return null;
  }

  if (!supabaseClient) {
    supabaseClient = createClient(supabaseUrl, supabaseKey);
  }

  return supabaseClient;
};

export const useVisitCounter = (pageName: string = "home") => {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const lastIncrementedPageRef = useRef<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const client = getSupabaseClient();

    setLoading(true);
    setError(null);

    if (!client) {
      setError(
        "Missing Supabase environment variables: VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY",
      );
      setLoading(false);
      return () => {
        isMounted = false;
      };
    }

    // Avoid double increment in React 18 dev strict mode for the same page.
    if (import.meta.env.DEV && lastIncrementedPageRef.current === pageName) {
      setLoading(false);
      return () => {
        isMounted = false;
      };
    }

    lastIncrementedPageRef.current = pageName;

    const fetchAndIncrement = async (): Promise<void> => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { data, error: rpcError } = await client.rpc("increment_visit", {
          page: pageName,
        });

        if (rpcError) {
          throw rpcError;
        }

        if (isMounted) {
          setCount(typeof data === "number" ? data : 0);
          setError(null);
        }
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : "Unknown error occurred";

        if (isMounted) {
          setError(errorMessage);
          console.error("Error updating visit count:", err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    void fetchAndIncrement();

    return () => {
      isMounted = false;
    };
  }, [pageName]);

  return { count, loading, error };
};
