import { GoDotFill } from "react-icons/go";
import { FaDownload } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CONTACT_LINKS, PROFILE } from "@/config";
import { smallTagItems } from "@/mockApi";
import { BigTag, Button, Card, SmallTag } from "@/shared";

export function CardProfile() {
  return (
    <Card>
      <div className="flex flex-col gap-3 py-7.5 px-5 relative">
        <div className="flex max-md:flex-col max-md:items-center gap-3 max-md:mt-10">
          <img src={PROFILE.avatarSrc} alt={PROFILE.name} className="w-32.5 rounded-xl" />
          <div className="flex flex-col max-md:items-center max-md:gap-3 justify-between">
            <BigTag
              className="w-50"
              text={PROFILE.status}
              icon={<GoDotFill color="#0f0" />}
            />
            <div className="sm:text-3xl text-2xl whitespace-nowrap truncate">
              {PROFILE.name}
            </div>
            <div className="text-icon">{PROFILE.role}</div>
          </div>
        </div>
        <Link
          to={PROFILE.resumeHref}
          className="flex items-center gap-3 text-white-200 absolute md:top-8 top-5 right-5"
        >
          <span>{PROFILE.resumeLabel}</span>
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
            href={CONTACT_LINKS.telegram.href}
            target="_blank"
            title={CONTACT_LINKS.telegram.title}
            icon={<FaTelegramPlane />}
          />
          <Button
            href={CONTACT_LINKS.whatsapp.href}
            target="_blank"
            title={CONTACT_LINKS.whatsapp.title}
            icon={<IoLogoWhatsapp />}
          />
        </div>
      </div>
    </Card>
  );
}
