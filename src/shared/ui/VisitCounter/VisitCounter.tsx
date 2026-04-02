import { useVisitCounter } from "@/hooks/useVisitCounter";
import { Card } from "../Cards/Card";
import { LoadingUI } from "../LoadErr/LoadingUI";
import { ErrorUI } from "../LoadErr/ErrorUI";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const VisitCounter = () => {
  const { stats, loading, error } = useVisitCounter("home");

  if (loading) {
    return <LoadingUI isLoading />;
  }
  if (error) {
    return <ErrorUI isError />;
  }

  return (
    <Card className="space-y-6 px-6 py-6">
      {/* Верхняя часть: Карточки со статистикой */}
      <div className="grid w-full grid-cols-2 gap-4 pb-4 xl:grid-cols-4">
        <div className="w-full rounded-lg bg-slate-800 p-4 text-center">
          <p className="text-xs font-medium tracking-wider text-gray-400 uppercase">
            Всего
          </p>
          <p className="mt-1 text-2xl font-bold text-white">
            {stats.uniqueTotal.toLocaleString()}
          </p>
        </div>
        <div className="w-full rounded-lg bg-slate-800 p-4 text-center">
          <p className="text-xs font-medium tracking-wider text-gray-400 uppercase">
            Сегодня
          </p>
          <p className="mt-1 text-2xl font-bold text-green-400">
            {stats.today.toLocaleString()}
          </p>
        </div>
        <div className="w-full rounded-lg bg-slate-800 p-4 text-center">
          <p className="text-xs font-medium tracking-wider text-gray-400 uppercase">
            Неделя
          </p>
          <p className="mt-1 text-2xl font-bold text-blue-400">
            {stats.week.toLocaleString()}
          </p>
        </div>
        <div className="w-full rounded-lg bg-slate-800 p-4 text-center">
          <p className="text-xs font-medium tracking-wider text-gray-400 uppercase">
            Месяц
          </p>
          <p className="mt-1 text-2xl font-bold text-purple-400">
            {stats.month.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Нижняя часть: График */}
      <div className="border-t border-gray-700 pt-6">
        <h3 className="mb-4 text-sm font-medium text-gray-300 max-xl:text-center">
          Активность за последние 14 дней
        </h3>

        <div className="h-64 w-full">
          {stats.history.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={stats.history}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#374151"
                  vertical={false}
                />
                <XAxis
                  dataKey="day"
                  stroke="#9CA3AF"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#9CA3AF"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  allowDecimals={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    borderColor: "#374151",
                    color: "#F3F4F6",
                    borderRadius: "8px",
                  }}
                  itemStyle={{ color: "#60A5FA" }}
                />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#60A5FA"
                  strokeWidth={3}
                  dot={{ fill: "#60A5FA", r: 4 }}
                  activeDot={{ r: 6, fill: "#93C5FD" }}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-gray-500">
              Нет данных за этот период
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
