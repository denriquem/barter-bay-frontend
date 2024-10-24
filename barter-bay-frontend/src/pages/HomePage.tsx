import { Items } from "../components/Items";
import { Navbar } from "../components/Navbar";
import { PageWrapper } from "../components/PageWrapper";
import { TitleDisplay } from "../components/TitleDisplay";

export const HomePage = () => {
    return (
        <PageWrapper>
            <Navbar />
            <TitleDisplay />
            <Items />
        </PageWrapper>
    );
};
