function About() {
    return (
        <div className="min-h-screen bg-white pt-24 text-gray-900">

            {/* Hero */}
            <section className="mx-auto max-w-7xl px-6 py-16">
                <div className="text-center">
                    <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
                        About Me
                    </p>

                    <h1 className="text-4xl font-bold md:text-6xl">
                        Know More About Me
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                        I'm a passionate Frontend Developer who enjoys creating
                        beautiful, responsive and user-friendly web applications.
                    </p>
                </div>

                {/* About Content */}
                <div className="mt-16 grid items-center gap-12 md:grid-cols-2">

                    {/* Image */}
                    <div className="flex justify-center">
                        <div className="h-80 w-80 overflow-hidden rounded-2xl bg-gray-100 shadow-xl md:h-96 md:w-96">
                            <img
                                src="/about.jpg"
                                alt="Saddam Hossen"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Text */}
                    <div>
                        <h2 className="text-3xl font-bold">
                            I'm Saddam Hossen
                        </h2>

                        <h3 className="mt-3 text-xl font-semibold text-blue-600">
                            Frontend Developer
                        </h3>

                        <p className="mt-6 leading-8 text-gray-600">
                            I am a passionate web developer focused on building modern
                            and responsive websites. I enjoy turning ideas into real
                            websites that are fast, clean and easy to use.
                        </p>

                        <p className="mt-4 leading-8 text-gray-600">
                            I work mainly with HTML, CSS, JavaScript, React, Tailwind CSS
                            and other modern web technologies. I am continuously learning
                            new technologies and improving my development skills.
                        </p>

                        {/* Info */}
                        <div className="mt-8 grid gap-4 sm:grid-cols-2">

                            <div>
                                <p className="text-sm text-gray-500">Name</p>
                                <p className="font-semibold">Saddam Hossen</p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="font-semibold">saddam@example.com</p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">Location</p>
                                <p className="font-semibold">Bangladesh</p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">Role</p>
                                <p className="font-semibold">Frontend Developer</p>
                            </div>

                        </div>

                        {/* Button */}
                        <div className="mt-8">
                            <a
                                href="/cv.pdf"
                                download
                                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* What I Do */}
            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-7xl px-6">

                    <div className="text-center">
                        <p className="font-semibold text-blue-600">
                            WHAT I DO
                        </p>

                        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                            My Expertise
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">

                        {/* Card 1 */}
                        <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                            <div className="text-4xl">💻</div>

                            <h3 className="mt-5 text-xl font-bold">
                                Web Development
                            </h3>

                            <p className="mt-3 leading-7 text-gray-600">
                                I build modern and responsive websites using React,
                                JavaScript and modern web technologies.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                            <div className="text-4xl">🎨</div>

                            <h3 className="mt-5 text-xl font-bold">
                                UI Design
                            </h3>

                            <p className="mt-3 leading-7 text-gray-600">
                                I create clean, simple and user-friendly interfaces
                                that work well on all devices.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                            <div className="text-4xl">🚀</div>

                            <h3 className="mt-5 text-xl font-bold">
                                Modern Technologies
                            </h3>

                            <p className="mt-3 leading-7 text-gray-600">
                                I continuously learn new technologies and improve my
                                skills to build better web applications.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}

export default About;