// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
const projects = [
  {
    title: "Sustainable Construction Project Development 1",
    slug: "project-1",
    color: "bg-rose-50",
    description:
      "This project explores sustainable building solutions using environmentally responsible design principles and technologies.",
  },
  {
    title: "Sustainable Construction Project Development 2",
    slug: "project-2",
    color: "bg-amber-50",
    description:
      "This project explores sustainable building solutions using environmentally responsible design principles and technologies.",
  },
  {
    title: "Sustainable Construction Project Development 3",
    slug: "project-3",
    color: "bg-green-50",
    description:
      "This project explores sustainable building solutions using environmentally responsible design principles and technologies.",
  },
  {
    title: "Sustainable Construction Project Development 4",
    slug: "project-4",
    color: "bg-sky-50",
    description:
      "This project explores sustainable building solutions using environmentally responsible design principles and technologies.",
  },
  {
    title: "Sustainable Construction Project Development 5",
    slug: "project-5",
    color: "bg-slate-50",
    description:
      "This project explores sustainable building solutions using environmentally responsible design principles and technologies.",
  },
];

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
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
          width={500}
          height={500}
        />
        <p className="text-lg text-gray-700 mb-6">{project.description}</p>
      </div>
    </section>
  );
}
