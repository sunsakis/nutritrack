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
                title="Bábuška - Naminis Maistas Į Namus 🚀"
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
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Iš širdies į burną.
                            </PageTitle>
                            <Content className="text-left" alignment="center">
                                <p>
                                    Nuo seno žmonės pirkdavo namuose pagamintą maistą, nes 
                                    taip yra pigiau, skaniau ir sveikiau. Daugelyje pasaulio šalių ši tradicija niekada nenutrūko,
                                    bet ne Lietuvoje, kurioje buvo prekiaujama maistu tik iš specialiai įrengtų virtuvių.
                                    Pokyčiai maisto gamybos tvarkoje buvo džiugi žinia visiems, 
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
                                <BadgeMessage>Prisijunk prie bábuškų</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                                id="form"
                            >
                                Pralobk iš savo firminių patiekalų
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Kviečiame užsiregistruoti visus, norinčius būti maisto gamintojais.
                                    Algoritmas taikys pirmenybę tiems, kurių didelė pasiūla ir geri reitingai.
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
