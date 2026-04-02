import { Button, Card, VisitCounter } from "@/shared";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SECRET_KEY = "frontend747";

export const AdminStats = () => {
  const [searchParams] = useSearchParams();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Проверяем, есть ли в URL параметр ?key=ВАШ_СЕКРЕТ
    const key = searchParams.get("key");

    if (key === SECRET_KEY) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  }, [searchParams]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === SECRET_KEY) {
      // Перенаправляем на эту же страницу, но уже с правильным параметром в URL
      window.location.href = `/admin?key=${SECRET_KEY}`;
    } else {
      setError("Неверный ключ доступа");
    }
  };

  // Если не авторизован — показываем форму входа
  if (!isAuthorized) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-900 px-3 text-white">
        <Card className="w-full max-w-md space-y-6 border-gray-700 bg-gray-800 p-8">
          <h2 className="text-center text-2xl font-bold">Доступ ограничен</h2>
          <p className="py-2 text-center text-sm text-gray-400">
            Введите ключ доступа для просмотра статистики.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Секретный ключ"
              className="w-full rounded border border-gray-700 bg-gray-900 px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full rounded bg-blue-600 px-4 py-2 font-medium transition-colors hover:bg-blue-700"
            >
              Войти
            </button>
          </form>

          <div className="mt-4 text-center text-xs text-gray-500">
            Подсказка: ссылка должна содержать ?key=...
          </div>
        </Card>
      </div>
    );
  }

  // Если авторизован — показываем дашборд
  return (
    <div className="min-h-screen px-3 py-4">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="mb-8 flex items-center justify-between gap-5 max-md:flex-col">
          <h1 className="text-2xl font-bold whitespace-nowrap md:text-3xl">
            📊 Панель статистики
          </h1>
          <Button
            title="Вернуться на сайт"
            onClick={() => (window.location.href = "/")}
            className="w-60!"
          />
        </div>

        {/* Ваш красивый компонент с графиками */}
        <VisitCounter />
      </div>
    </div>
  );
};
