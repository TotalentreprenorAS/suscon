import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "../../data/projects";

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function ProjectDetailPage({ params }: PageProps) {
  try {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) return notFound();

    return (
      <section className={`${project.color} min-h-screen py-20 px-6`}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
          <Image
            src="/rodion-kutsaiev-PEm_sLmJT-w-unsplash-1.avif"
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg shadow"
            width={800}
            height={400}
          />
          <p className="text-lg text-gray-700 mt-6">{project.description}</p>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error loading project:", error);
    return notFound();
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
