const Skills = () => {
    const skills = [
        {
            name: "HTML",
            level: "90%",
            icon: "🌐",
            description: "Semantic and accessible web structure",
        },
        {
            name: "CSS",
            level: "85%",
            icon: "🎨",
            description: "Responsive and modern web design",
        },
        {
            name: "JavaScript",
            level: "80%",
            icon: "⚡",
            description: "Interactive and dynamic web applications",
        },
        {
            name: "React",
            level: "80%",
            icon: "⚛️",
            description: "Reusable component-based applications",
        },
        {
            name: "Tailwind CSS",
            level: "85%",
            icon: "💨",
            description: "Fast and responsive UI development",
        },
        {
            name: "Git & GitHub",
            level: "75%",
            icon: "🔧",
            description: "Version control and project management",
        },
        {
            name:"Next.js",
            level:"50%",
            icon:"💨",
            description:"dynamic website creat for",
        }
    ];

    return (
        <section className="min-h-screen bg-gray-50 px-6 py-32">
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="text-center">
                    <p className="font-semibold uppercase tracking-widest text-blue-600">
                        My Skills
                    </p>

                    <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
                        Technologies I Work With
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                        Here are some of the technologies and tools I use to build
                        modern, responsive and user-friendly web applications.
                    </p>
                </div>

                {/* Skills Cards */}
                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="rounded-2xl bg-white p-7 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >

                            {/* Icon + Name */}
                            <div className="flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-3xl">
                                    {skill.icon}
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-gray-900">
                                        {skill.name}
                                    </h2>

                                    <p className="text-sm text-gray-500">
                                        {skill.level}
                                    </p>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="mt-5 text-gray-600">
                                {skill.description}
                            </p>

                            {/* Progress */}
                            <div className="mt-6">
                                <div className="mb-2 flex justify-between text-sm">
                                    <span className="font-medium text-gray-700">
                                        Skill Level
                                    </span>

                                    <span className="font-semibold text-blue-600">
                                        {skill.level}
                                    </span>
                                </div>

                                <div className="h-2.5 w-full rounded-full bg-gray-200">
                                    <div
                                        className="h-2.5 rounded-full bg-blue-600"
                                        style={{ width: skill.level }}
                                    ></div>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>

                {/* Bottom Section */}
                <div className="mt-20 rounded-2xl bg-gray-900 p-8 text-center text-white md:p-12">

                    <h2 className="text-3xl font-bold">
                        Always Learning, Always Improving 🚀
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
                        Technology is constantly changing, so I continuously learn
                        new tools and technologies to improve my development skills.
                    </p>

                </div>

            </div>
        </section>
    );
};

export default Skills;