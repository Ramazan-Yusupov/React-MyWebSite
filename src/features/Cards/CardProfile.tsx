import { Card } from "@/shared/ui/Cards/Card";
import { BigTag } from "@/shared/ui/Tags/BigTag";
import { GoDotFill } from "react-icons/go";
import { FaDownload } from "react-icons/fa6";
import { SmallTag } from "@/shared/ui/Tags/SmallTag";
import { smallTagItems } from "@/mockApi/smallTagItems";
import { Button } from "@/shared/ui/Button/Button";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { Link } from "react-router-dom";

export function CardProfile() {
  return (
    <Card>
      <div className="flex flex-col gap-3 py-7.5 px-5 relative">
        <div className="flex max-md:flex-col max-md:items-center gap-3 max-md:mt-10">
          <img src="/frontend.jpg" alt="img" className="w-32.5 rounded-xl" />
          <div className="flex flex-col max-md:items-center max-md:gap-3 justify-between">
            <BigTag
              className="w-50"
              text="Ищу Работу"
              icon={<GoDotFill color="#0f0" />}
            />
            <div className="sm:text-3xl text-2xl whitespace-nowrap truncate">
              Рамазан Юсупов
            </div>
            <div className="text-icon">Frontend Developer</div>
          </div>
        </div>
        <Link
          to="/"
          className="flex items-center gap-3 text-white-200 absolute md:top-8 top-5 right-5"
        >
          <span>Резюме</span>
          <FaDownload size={30} />
        </Link>

        <Card className="bg-slate-300 py-5 px-4.5">
          <div className="flex flex-wrap max-md:justify-center gap-4 gap-y-2">
            {smallTagItems.map((item) => (
              <SmallTag key={item.id} text={item.title} icon={item.icon} />
            ))}
          </div>
        </Card>
        <div className="flex max-sm:flex-col gap-3">
          <Button
            href="https://web.telegram.org/k/#@frontend747"
            target="_blank"
            title="Telegram"
            icon={<FaTelegramPlane />}
          />
          <Button
            href="https://wa.me/79604138833"
            target="_blank"
            title="WhatsApp"
            icon={<IoLogoWhatsapp />}
          />
        </div>
      </div>
    </Card>
  );
}
