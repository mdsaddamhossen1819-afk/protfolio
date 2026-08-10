import { useState } from "react";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                <a href="#" className="text-2xl font-bold text-blue-700">
                    Saddam Hossen.
                </a>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-8 md:flex">
                    <a href="/" className="hover:text-blue-600">
                        Home
                    </a>

                    <a href="/about" className="hover:text-blue-600">
                        About
                    </a>

                    <a href="/skills" className="hover:text-blue-600">
                        Skills
                    </a>
                    <a href="/projects" className="hover:text-blue-600">
                        Projects
                    </a>

                    <a href="/contact" className="hover:text-blue-600">
                        Contact
                    </a>
                </div>

                <a
                    href="/PageCv"
                    className="hidden rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700 md:block"
                >
                    Download CV
                </a>

                {/* Mobile Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="text-2xl md:hidden"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="border-t bg-white px-6 py-5 md:hidden">
                    <div className="flex flex-col gap-5">

                        <a href="/" onClick={() => setOpen(false)}>
                            Home
                        </a>

                        <a href="/about" onClick={() => setOpen(false)}>
                            About
                        </a>

                        <a href="/skills" onClick={() => setOpen(false)}>
                            Skills
                        </a>

                       

                        <a href="/contact" onClick={() => setOpen(false)}>
                            Contact
                        </a>

                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;

