import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";
import ContactForm from "@components/ContactForm";

export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="Babuška - Naminis Maistas Į Namus 🚀"
                description="Šviežutėlis maistas keliaujantis iš širdžių į burnas."
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="features" className="features">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Istorija</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Laikas vėl decentralizuoti maistą.
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Nuo seno žmonės pirkdavo namuose pagamintą maistą, nes 
                                    taip yra pigiau, skaniau ir sveikiau. Daugelyje pasaulio šalių ši tradicija niekada nenutrūko,
                                    bet ne Lietuvoje, kur po Nepriklausomybės buvo leista prekiauti tik iš specialiai įrengtų virtuvių.
                                    Tačiau 2019 metais įsigaliojusi <u className="text-blue-500">nauja maisto gamybos tvarka</u> buvo džiaugsminga žinia visiems, 
                                    kurie mėgsta gaminti <i>savo</i> virtuvėje.
                                </p>
                            </Content>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Card Container Tabs */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="feature-tabs">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Prisijunk prie babuškų</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Pralobk iš savo firminių patiekalų
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Renkame norinčius būti pačiais pirmaisiais pardavėjais mūsų platformoje.
                                    Būti kartu nuo pačių pradžių reikš, kad galėsite užsitikrinti aukštą matomumą.
                                    Mūsų algoritmas taikys pirmenybę maisto gamintojams, kurių didelė pasiūla ir geri reitingai.
                                </p>
                            </Content>
                            <ContactForm />
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
