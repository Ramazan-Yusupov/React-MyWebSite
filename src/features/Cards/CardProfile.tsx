import { GoDotFill } from "react-icons/go";
import { FaDownload } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { CONTACT_LINKS, PROFILE } from "@/config";
import { smallTagItems } from "@/mockApi";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Button } from "@/shared/ui/Buttons/Button";
import { Card } from "@/shared/ui/Cards/Card";
import { BigTag } from "@/shared/ui/Tags/BigTag";
import { SmallTag } from "@/shared/ui/Tags/SmallTag";

export function CardProfile() {
  return (
    <Card>
      <div className="relative flex flex-col gap-3 px-5 py-7.5">
        <div className="flex gap-3 max-md:mt-10 max-md:flex-col max-md:items-center">
          <Avatar src={PROFILE.avatarSrc} alt={PROFILE.name} />
          <div className="flex flex-col gap-4 max-md:items-center max-md:gap-3">
            <BigTag
              className="w-50"
              text={PROFILE.status}
              icon={<GoDotFill color="#0f0" />}
            />
            <div className="max-md:text-center">
              <div className="truncate text-2xl whitespace-nowrap sm:text-3xl">
                {PROFILE.name}
              </div>
              <div className="text-icon">{PROFILE.role}</div>
            </div>
          </div>
        </div>
        <a
          target="_blank"
          href={PROFILE.resumeHref}
          download={PROFILE.resumeDownloadName}
          className="text-white-200 hover:text-indigo absolute top-5 right-5 flex items-center gap-3 md:top-8"
        >
          <span>{PROFILE.resumeLabel}</span>
          <FaDownload size={30} />
        </a>

        <Card className="bg-slate-300 px-4.5 py-5">
          <div className="flex flex-wrap gap-4 gap-y-2 max-md:justify-center">
            {smallTagItems.map((item) => (
              <SmallTag
                key={item.id}
                icon={item.icon}
                href={item.href}
                title={item.title}
              />
            ))}
          </div>
        </Card>
        <div className="flex gap-3 max-sm:flex-col">
          <Button
            target="_blank"
            icon={<FaTelegramPlane />}
            href={CONTACT_LINKS.telegram.href}
            title={CONTACT_LINKS.telegram.title}
          />
          <Button
            target="_blank"
            icon={<IoLogoWhatsapp />}
            href={CONTACT_LINKS.whatsapp.href}
            title={CONTACT_LINKS.whatsapp.title}
          />
        </div>
      </div>
    </Card>
  );
}
