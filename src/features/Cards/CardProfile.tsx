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
      <div className="flex flex-col gap-3 py-7.5 px-5">
        <div className="flex justify-between items-start w-full gap-3">
          <div className="flex gap-3">
            <img src="/frontend.jpg" alt="img" className="w-32.5 rounded-xl" />
            <div className="flex flex-col justify-between">
              <BigTag
                className="w-50"
                text="Available To Work"
                icon={<GoDotFill color="#0f0" />}
              />
              <div className="text-3xl">Ramazan Yusupov</div>
              <div className="text-icon">Frontend Developer</div>
            </div>
          </div>
          <Link to="/" className="flex items-center gap-3 text-white-200">
            <span>Resume</span>
            <FaDownload size={30} />
          </Link>
        </div>

        <Card className="bg-slate-300 py-5 px-4.5">
          <div className="flex flex-wrap gap-4 gap-y-2">
            {smallTagItems.map((item) => (
              <SmallTag key={item.id} text={item.title} icon={item.icon} />
            ))}
          </div>
        </Card>
        <div className="flex gap-3">
          <Button href="/" title="Telegram Me" icon={<FaTelegramPlane />} />
          <Button href="/" title="WhatsApp Me" icon={<IoLogoWhatsapp />} />
        </div>
      </div>
    </Card>
  );
}
