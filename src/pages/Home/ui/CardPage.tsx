import { Card } from "../../../widget";
import {
  ItemDate,
  ItemDateWebServer,
} from "../../../widget/card/types/itemDate";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const CardPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div data-aos="fade-up" data-aos-delay={100} className="text-3xl">
          Коммерческие проекты
        </div>
        <div className="grid grid-cols-1 min-[950px]:grid-cols-2 min-[1750px]:grid-cols-3 gap-4 mt-10 mb-20">
          {ItemDateWebServer.map((item) => (
            <div
              data-aos="fade-up"
              data-aos-delay={100 * item.id}
              key={item.id}
            >
              <Card
                src={item.src}
                text={item.text}
                link={item.link}
                title={item.title}
                gitLink={item.gitLink}
                iconGit={item.iconGit}
                itemContent={item.languageContent}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay={100}
        className="flex flex-col border-t-2 border-gray-600 pt-10"
      />
      <div data-aos="fade-up" data-aos-delay={200} className="text-3xl">
        Личные проекты
      </div>
      <div className="grid grid-cols-1 min-[950px]:grid-cols-2 min-[1750px]:grid-cols-3 gap-4 my-10">
        {ItemDate.map((item) => (
          <div data-aos="fade-up" data-aos-delay={100 * item.id} key={item.id}>
            <Card
              src={item.src}
              text={item.text}
              link={item.link}
              title={item.title}
              gitLink={item.gitLink}
              iconGit={item.iconGit}
              itemContent={item.languageContent}
            />
          </div>
        ))}
      </div>
    </>
  );
};
