function Contact() {
    return (
        <section className="min-h-screen bg-gray-50 px-6 py-32">
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="text-center">
                    <p className="font-semibold uppercase tracking-widest text-blue-600">
                        Contact Me
                    </p>

                    <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
                        Let's Work Together
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                        Have a project, idea, or opportunity? Feel free to contact me.
                        I'll be happy to discuss it with you.
                    </p>
                </div>

                {/* Content */}
                <div className="mt-16 grid gap-10 md:grid-cols-2">

                    {/* Left Side */}
                    <div className="rounded-2xl bg-gray-900 p-8 text-white shadow-xl md:p-10">

                        <h2 className="text-3xl font-bold">
                            Get In Touch
                        </h2>

                        <p className="mt-4 leading-7 text-gray-400">
                            I'm always open to discussing new projects, creative ideas,
                            or opportunities to be part of your team.
                        </p>

                        {/* Email */}
                        <div className="mt-10 flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-xl">
                                ✉
                            </div>

                            <div>
                                <p className="text-sm text-gray-400">
                                    Email
                                </p>

                                <a
                                    href="mailto:saddam@example.com"
                                    className="mt-1 block font-medium hover:text-blue-400"
                                >
                                    saddam@example.com
                                </a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="mt-6 flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-xl">
                                ☎
                            </div>

                            <div>
                                <p className="text-sm text-gray-400">
                                    Phone
                                </p>

                                <a
                                    href="tel:+8801000000000"
                                    className="mt-1 block font-medium hover:text-blue-400"
                                >
                                    +880 1XXXXXXXXX
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="mt-6 flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-xl">
                                📍
                            </div>

                            <div>
                                <p className="text-sm text-gray-400">
                                    Location
                                </p>

                                <p className="mt-1 font-medium">
                                    Bangladesh
                                </p>
                            </div>
                        </div>

                        {/* Social */}
                        <div className="mt-10">
                            <p className="mb-4 font-semibold">
                                Follow Me
                            </p>

                            <div className="flex gap-3">

                                <a
                                    href="https://github.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-800 font-semibold transition hover:bg-blue-600"
                                >
                                    Git
                                </a>

                                <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-800 font-semibold transition hover:bg-blue-600"
                                >
                                    in
                                </a>

                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-800 font-semibold transition hover:bg-blue-600"
                                >
                                    f
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="rounded-2xl bg-white p-8 shadow-xl md:p-10">

                        <h2 className="text-2xl font-bold text-gray-900">
                            Send Me a Message
                        </h2>

                        <form className="mt-8 space-y-6">

                            {/* Name */}
                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Your Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter subject"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Message
                                </label>

                                <textarea
                                    rows="6"
                                    placeholder="Write your message..."
                                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                ></textarea>
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                            >
                                Send Message
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;