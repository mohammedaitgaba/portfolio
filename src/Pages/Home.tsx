import Landing from "../components/Landing.tsx";
// import Social from "../components/Social.tsx";
import AboutMe from "../components/AboutMe.tsx";

export const Home = () => {
    return (
        <main className="relative">
            <Landing />
            <AboutMe />
            {/*<Social/>*/}
        </main>
    );
};