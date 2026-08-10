import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

               <Link to="#" className="text-2xl font-bold text-blue-700">
                    Saddam Hossen.
                </Link>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-8 md:flex">
                   <Link to="/" className="hover:text-blue-600">
                        Home
                    </Link>

                   <Link to="/about" className="hover:text-blue-600">
                        About
                    </Link>

                   <Link to="/skills" className="hover:text-blue-600">
                        Skills
                    </Link>
                   <Link to="/projects" className="hover:text-blue-600">
                        Projects
                    </Link>

                   <Link to="/contact" className="hover:text-blue-600">
                        Contact
                    </Link>
                </div>

               <Link
                    to="/PageCv"
                    className="hidden rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700 md:block"
                >
                    Download CV
                </Link>

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

                       <Link to="/" onClick={() => setOpen(false)}>
                            Home
                        </Link>

                       <Link to="/about" onClick={() => setOpen(false)}>
                            About
                        </Link>

                       <Link to="/skills" onClick={() => setOpen(false)}>
                            Skills
                        </Link>

                       

                       <Link to="/contact" onClick={() => setOpen(false)}>
                            Contact
                        </Link>

                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;

