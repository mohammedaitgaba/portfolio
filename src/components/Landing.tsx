import profile from "../assets/me.png"
const Landing = () => {
    return (
        <main className="flex  items-center p-24 px-36 bg-gradient-to-l from-gray-950 via-gray-900 to-gray-950 text-white h-screen">
            <section className="flex flex-col gap-10 justify-center">
                <span className="font-sequel font-extralight text-2xl text-gray-400">FULL-Stack WEB DEVELOPER</span>
                <span className="font-sequel font-extralight text-5xl">MOHAMMED AIT GABA</span>
                <span className="text-gray-400 border-l-2 px-5 py-2 border-gray-400 rounded-2xl">
                    Welcome to my portfolio <br/> feel free to reach me out, <br/>
                    i would love to contribute <br/> or work together .
                </span>
            </section>
            <section className="flex items-start justify-start max-w-2xl">
                    <img src={profile} className=" object-contain" alt="portfolio-profile"/>
            </section>
        </main>
    );
};
export default Landing;