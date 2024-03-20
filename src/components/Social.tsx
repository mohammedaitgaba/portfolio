const Social = () => {
    const tabs = [
        {name:"Github",link:"https://github.com/mohammedaitgaba"},
        {name:"Linkedin",link:"https://www.linkedin.com/in/mohammed-ait-gaba-4b454519a"},
        {name:"Gmail",link:"medgaba237@gmail.com",},
        {name:"IG",link:"https://www.instagram.com/med_gaba"}
    ]
    return (
        <>
            <section className="flex justify-center w-full absolute bottom-4 text-white">

                <ul className="flex gap-3">
                    {
                        tabs.map(tab=>{
                            return (
                                <li
                                    className="font-extralight text-lg border border-black bg-white text-black px-3 py-1 rounded-2xl hover:bg-black hover:text-white duration-300"
                                >
                                    <a href={tab.link} target="_blank">{tab.name}</a>
                                </li>
                            )
                        })
                    }

                </ul>
            </section>
        </>
    );
};

export default Social;