import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Sustainable Construction Project Development 1",
      slug: "projects/project-1",
      color: "bg-rose-50",
    },
    {
      title: "Sustainable Construction Project Development 2",
      slug: "projects/project-2",
      color: "bg-amber-50",
    },
    {
      title: "Sustainable Construction Project Development 3",
      slug: "projects/project-3",
      color: "bg-green-50",
    },
    {
      title: "Sustainable Construction Project Development 4",
      slug: "projects/project-4",
      color: "bg-sky-50",
    },
    {
      title: "Sustainable Construction Project Development 5",
      slug: "projects/project-5",
      color: "bg-slate-50",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-10">Our Projects</h1>
      <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto mb-12">
        Explore our sustainable construction initiatives designed to push
        innovation, reduce environmental impact, and shape a better tomorrow.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <Link
            href={project.slug}
            key={index}
            className={`${project.color} rounded-xl shadow-md overflow-hidden hover:shadow-lg transition border border-gray-200`}
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src="/rodion-kutsaiev-PEm_sLmJT-w-unsplash-1.avif"
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 text-sm">
                This project explores sustainable building solutions using
                environmentally responsible design principles and technologies.
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
