import bannerImg from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <div>
            <section className="flex flex-col md:flex-row justify-between items-center gap-8 p-8 bg-white text-black container mx-auto">
                <div>
                    <h1 className="text-4xl font-bold text-black">Build Your Ideal </h1>
                    <h1 className="bg-gradient-to-r from-orange-500 via-purple-500 to-blue-900 bg-clip-text text-transparent font-extrabold text-5xl">  Developement Stack</h1>
                    <p className="text-lg text-gray-700">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.</p>


                    <div className="flex gap-4 mt-36">
                        <button className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold px-6 py-3  shadow-lg hover:from-blue-600 hover:to-pink-600 transition duration-300 rounded-full">
                            Explore Technologies
                        </button>
                        <button className=" hover:bg-green-700 border-2 border-green-500 text-black font-bold py-2 px-4 rounded">
                            Learn More
                        </button>
                    </div>

                </div>

                <div>
                    <img src={bannerImg} alt="Banner Image" className="mt-4" />
                </div>

            </section>

        </div>
    );
};

export default Banner;