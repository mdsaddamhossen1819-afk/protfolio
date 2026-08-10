const CV = () => {
    return (
        <section className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-24">
            <div className="w-full max-w-3xl rounded-2xl bg-white p-10 text-center shadow-xl">

                {/* Icon */}
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-4xl">
                    📄
                </div>

                {/* Title */}
                <h1 className="mt-6 text-4xl font-bold text-gray-900">
                    My Resume
                </h1>

                <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
                    Download my CV to learn more about my skills, projects,
                    education and experience.
                </p>

                {/* Download Button */}
                <a
                    href="/Saddam_Hossen_CV.pdf"
                    download="Saddam_Hossen_CV.pdf"
                    className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                    📥 Download CV
                </a>

                {/* View Button */}
                <a
                    href="/Saddam_Hossen_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-3 mt-8 inline-flex items-center gap-2 rounded-lg border border-gray-300 px-7 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
                >
                    👁 View CV
                </a>

            </div>
        </section>
    );
};

export default CV;