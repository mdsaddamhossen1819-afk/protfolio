const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Online Learning Platform",
      description:
        "A modern and responsive online learning platform where users can explore courses and learn different skills.",
      image: "/project-1.jpg",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      live: "https://example.com",
      github: "https://github.com/",
    },

    {
      id: 2,
      title: "E-Commerce Website",
      description:
        "A responsive e-commerce website with product cards, shopping cart and modern user interface.",
      image: "/project-2.jpg",
      technologies: ["React", "JavaScript", "CSS"],
      live: "https://example.com",
      github: "https://github.com/",
    },

    {
      id: 3,
      title: "News Website",
      description:
        "A dynamic news website that displays news articles using API data with a clean responsive design.",
      image: "/project-3.jpg",
      technologies: ["React", "REST API", "Tailwind CSS"],
      live: "https://example.com",
      github: "https://github.com/",
    },

    {
      id: 4,
      title: "Job Portal",
      description:
        "A modern job portal where users can explore job opportunities and view job details.",
      image: "/project-4.jpg",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      live: "https://example.com",
      github: "https://github.com/",
    },

    {
      id: 5,
      title: "Portfolio Website",
      description:
        "A personal developer portfolio website showcasing skills, projects, experience and contact information.",
      image: "/project-5.jpg",
      technologies: ["React", "Tailwind CSS", "React Router"],
      live: "https://example.com",
      github: "https://github.com/",
    },

    {
      id: 6,
      title: "Weather Application",
      description:
        "A simple weather application that displays weather information using an external API.",
      image: "/project-6.jpg",
      technologies: ["React", "API", "CSS"],
      live: "https://example.com",
      github: "https://github.com/",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-32">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center">

          <p className="font-semibold uppercase tracking-widest text-blue-600">
            My Work
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            My Projects
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Here are some of the projects I have built using modern
            web technologies.
          </p>

        </div>

        {/* Projects */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Image */}
              <div className="h-52 overflow-hidden bg-gray-200">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              {/* Content */}
              <div className="p-6">

                <h2 className="text-2xl font-bold text-gray-900">
                  {project.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">

                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-3">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-center text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
                  >
                    GitHub
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;