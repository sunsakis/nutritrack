import { SectionContainer } from "@components/Section";

const DATA = [
    {
        title: "Template",
        items: [
            {
                label: "Features",
                href: "#features"
            },
            {
                label: "Testimonials",
                href: "#testimonials"
            },
            {
                label: "FAQ",
                href: "#faq"
            }
        ]
    },
    {
        title: "Company",
        items: [
            {
                label: "About",
                href: "https://github.com/christian-luntok/",
                target: "_blank"
            },
            {
                label: "Twitter",
                href: "https://github.com/christian-luntok/",
                target: "_blank"
            },
            {
                label: "Instagram",
                href: "https://github.com/christian-luntok/",
                target: "_blank"
            },
            {
                label: "Facebook",
                href: "https://github.com/christian-luntok/",
                target: "_blank"
            }
        ]
    }
];

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer id="footer" className="bg-white">
            <SectionContainer className="footer-credits relative z-10">
                <div className="wrap wrap-px py-6">
                    <p className="my-0">
                        © {year} Lietuvos bobulių asociacija - naminis maistas į namus.
                    </p>
                </div>
            </SectionContainer>
            <div className="footer--background"></div>
        </footer>
    );
};
