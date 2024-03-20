import background from "../assets/bg-pc.jpg"
const AboutMe = () => {
    return (
        <>
            <section className=" bg-gradient-to-l from-gray-950 via-gray-900 to-gray-950" >
                <article className="relative p-52 bg-gradient-to-l from-gray-200 via-gray-50 to-gray-200 h-screen flex flex-col justify-center items-center rounded-t-[200px] " data-aos="fade-up">
                    <h1 className="font-sequel text-8xl tracking-widest absolute top-28 z-50 " data-aos="fade-left">Who am I?</h1>
                    <div className="grid grid-cols-2 items-center px-20">
                        <div className="w-fit relative flex"  data-aos="zoom-in-right">
                            <img src={background} alt="background about me portfolio" className="w-[450px] h-[450px] object-cover rounded-full"/>
                        </div>
                        <div className="flex flex-col items-start text-lg pt-28">
                            <span>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ab adipisci asperiores b
                                landitiis dolore et excepturi expedita libero molest
                                iae molestias mollitia numquam, officiis omnis pariatur porro p
                                rovident rerum sed suscipit voluptates.
                                description here
                            </span>
                            <button className="justify-end mt-16 border-black border-2 rounded-full px-4 py-3 hover:text-white hover:bg-black duration-300">
                                Contact me
                            </button>
                        </div>
                    </div>
                </article>
            </section>
        </>
    );
};

export default AboutMe;