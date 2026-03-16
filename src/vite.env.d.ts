/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  // Добавьте другие переменные здесь, если они появятся
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
