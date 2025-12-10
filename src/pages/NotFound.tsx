import frontend from "../shared/assets/frontend.jpg";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div>
      <div className="flex flex-col gap-10 items-center justify-center h-screen">
        <img src={frontend} alt="404" className="w-75 border-2 rounded-2xl" />
        <div className="text-3xl font-bold text-center">
          404 - Страница не найдена
        </div>
        <Link
          to="/"
          className="text-2xl font-bold text-center border-2 p-5 rounded-xl"
        >
          На главную
        </Link>
      </div>
    </div>
  );
}
