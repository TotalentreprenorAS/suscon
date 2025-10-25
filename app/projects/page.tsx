import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-10">Our Projects</h1>
      <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto mb-12 font-semibold">
        Explore our sustainable construction initiatives designed to push
        innovation, reduce environmental impact, and shape a better tomorrow.
      </p>

      <div className="grid grid-cols-1 gap-10">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="rounded-xl max-w-[600px] mx-auto">
              <div className="flex">
                <p className="text-xs text-gray-500"> ID: {project.id}</p>
              </div>
              <div className="py-3 border-5 p-2 border-gray-300 gap-2">
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  {project.id} {project.title}
                </h2>
                <div className="flex flex-col items-center mt-1">
                  {/* <p className="text-gray-600 text-sm">
                 {project.description}
                </p> */}
                </div>
                <div className="flex justify-center mt-1">
                  {/* <Link href={`/projects/${project.slug}`} className="hover:underline"> More info
                </Link> */}
                  <p className="text-sm text-gray-700">
                    {" "}
                    Related areas of research:{" "}
                    <span className="text-gray-500">
                      {project.relatedAreaOfResearch}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
