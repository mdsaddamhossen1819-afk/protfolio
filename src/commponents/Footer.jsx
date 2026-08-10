function Footer() {
    return (
        <footer className="border-t border-gray-800 bg-gray-950 text-gray-300">
            <div className="mx-auto max-w-7xl px-6 py-12">

                <div className="grid gap-10 md:grid-cols-3">

                    {/* About */}
                    <div>
                        <h2 className="text-2xl font-bold text-white">
                            Saddam Hossen<span className="text-blue-500">.</span>
                        </h2>

                        <p className="mt-4 max-w-sm leading-7 text-gray-400">
                            I'm a passionate Frontend Developer who loves building
                            modern, responsive and user-friendly web applications.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#home"
                                    className="transition hover:text-blue-500"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#about"
                                    className="transition hover:text-blue-500"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#skills"
                                    className="transition hover:text-blue-500"
                                >
                                    Skills
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#projects"
                                    className="transition hover:text-blue-500"
                                >
                                    Projects
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#contact"
                                    className="transition hover:text-blue-500"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Contact Me
                        </h3>

                        <div className="space-y-3 text-gray-400">
                            <p>📧 saddam@example.com</p>
                            <p>📱 +880 1XXXXXXXXX</p>
                            <p>📍 Bangladesh</p>
                        </div>

                        {/* Social Links */}
                        <div className="mt-6 flex gap-4">

                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-blue-600 hover:text-white"
                            >
                                Git
                            </a>

                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-blue-600 hover:text-white"
                            >
                                in
                            </a>

                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-blue-600 hover:text-white"
                            >
                                f
                            </a>

                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-10 border-t border-gray-800 pt-6 text-center">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Saddam Hossen. All rights reserved.
                    </p>

                    <p className="mt-2 text-sm text-gray-600">
                        Built with React & Tailwind CSS ❤️
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;