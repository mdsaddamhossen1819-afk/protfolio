import { Link } from "react-router-dom";

function Hero() {
    return (
        <section
            id="home"
            className="flex min-h-screen items-center bg-gray-50"
        >
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">

                {/* Left */}
                <div>
                    <p className="mb-4 text-lg font-semibold text-blue-600">
                        Hello, I'm
                    </p>

                    <h1 className="text-5xl font-bold leading-tight md:text-7xl">
                        Saddam Hossen
                    </h1>

                    <h2 className="mt-5 text-2xl font-semibold text-gray-600 md:text-3xl">
                        Frontend Developer
                    </h2>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                        I build modern, responsive and user-friendly web applications
                        using React, JavaScript and modern web technologies.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">

                        <Link
                            to="/skills"
                            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                        >
                            View My Work
                        </Link>

                        <Link
                            to="/contact"
                            className="rounded-lg border border-gray-300 px-6 py-3 font-semibold transition hover:bg-gray-100"
                        >
                            Contact Me
                        </Link>

                    </div>
                </div>

                {/* Right */}
                <div className="flex justify-center">
                    <div className="flex h-72 w-72 items-center justify-center overflow-hidden rounded-full bg-blue-100 md:h-96 md:w-96">
                        <img
                            src="/saddam.pnj.png"
                            alt="Saddam Hossen"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;