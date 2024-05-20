import { SectionContainer } from "@components/Section";

export const Header = () => {
    return (
        <header
            id="header"
            className="header fixed w-full z-30 top-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-50"
        >
            <SectionContainer className="header--container wrap wrap-px">
                <div className="header-logo--container">
                    <a href="#">
                        <b className="logo mb-0 text-2xl text-pink-500 hover:text-pink-400 font-serif transition duration-500 ease-in-out">
                            bobulė
                        </b>
                    </a>
                </div>
            </SectionContainer>
        </header>
    );
};
