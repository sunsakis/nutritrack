import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";

const ContentImageData = [
    {
        id: uuid(),
        title: "Gamyba iš namų",
        content:
            "Norint užsidirbti iš savo kulinarinių sugebėjimų nebereikia investuoti į specialiai įrengtą virtuvę, reiškia galėsite įgyvendinti daugelio svajonę - dirbti iš namų. VMVT reikalavimams nenusižengsite kiekvieną dieną parduodami iki 20 porcijų patiekalų, 10kg pusgaminių ir ne daugiau 100 vieno kąsnio užkandžių.",
        align: "right",
        image: "/naminiai-lietiniai-blynai-su-mesa.webp"
    },
    {
        id: uuid(),
        title: "Kokybė paprastume",
        content:
            `Naminį maistą mylim mes visi. Jei žinote gerą receptą ir norite su juo užsidirbti, jums tereikia nuotoliniu būdu išklausyti paskaitą apie higieną, gauti medicininę knygelę leidžiančią gaminti maistą ir prisijungti prie mūsų.`,
        align: "left",
        image: "/naminiai-rauginti-kopustai.webp"
    }
];

export const ContentImage = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {ContentImageData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-2 gap-y-8"
                >
                    <div
                        className={`process-item--image rounded-3xl ${
                            item.align === "left" ? "md:order-1" : ""
                        }`}
                    >
                        <Image
                            src={item.image}
                            width={512}
                            height={512}
                            objectFit="cover"
                            alt="Process Banner 1"
                            className="drop-shadow-xl w-full offset-y-0 offset-x-8 blur-16"
                        />
                    </div>
                    <div
                        className={`process-item--content ${
                            item.align === "left"
                                ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                                : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                        } my-auto content text-black/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-black">
                            {item.title}
                        </h3>
                        <p dangerouslySetInnerHTML={{ __html: item.content }} />
                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
