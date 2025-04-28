import SplitSection from "../components/about/SplitCards";
import AboutCards from "../components/about/AboutCards";

const topics = [
  {
    title: "Building Toxicology",
    text: "Reducing hazardous materials in construction for healthier environments.",
    color: "bg-rose-50",
    imageUrl: "/rodion-kutsaiev-PEm_sLmJT-w-unsplash-1.avif",
  },
  {
    title: "Mass Excess Utilization",
    text: "Reusing surplus materials from engineering projects to reduce waste.",
    color: "bg-amber-50",
    imageUrl: "/rodion-kutsaiev-PEm_sLmJT-w-unsplash-1.avif",
  },
  {
    title: "Low Radiation",
    text: "Designing safe indoor spaces with minimal radiation exposure.",
    color: "bg-indigo-50",
    imageUrl: "/rodion-kutsaiev-PEm_sLmJT-w-unsplash-1.avif",
  },
  {
    title: "Renewable Energy",
    text: "Embedding solar and clean energy into the built environment.",
    color: "bg-green-50",
    imageUrl: "/rodion-kutsaiev-PEm_sLmJT-w-unsplash-1.avif",
  },
  {
    title: "Social Architecture",
    text: "Creating inclusive spaces that foster community and well-being.",
    color: "bg-sky-50",
    imageUrl: "/rodion-kutsaiev-PEm_sLmJT-w-unsplash-1.avif",
  },
  {
    title: "Small Houses",
    text: "Promoting compact, efficient living solutions for a lower footprint.",
    color: "bg-purple-50",
    imageUrl: "/rodion-kutsaiev-PEm_sLmJT-w-unsplash-1.avif",
  },
  {
    title: "Sustainable City Planning",
    text: "Shaping urban development through green zoning and infrastructure.",
    color: "bg-slate-50",
    imageUrl: "/rodion-kutsaiev-PEm_sLmJT-w-unsplash-1.avif",
  },
];

export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-10">About Us</h1>

      <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
        At Suscon, we specialize in key areas of sustainable construction and
        environmental impact. Our multidisciplinary approach shapes the future
        of building in a responsible way.
      </p>
      <AboutCards />

      {topics.map((topic, index) => (
        <SplitSection
          key={topic.title}
          title={topic.title}
          text={topic.text}
          color={topic.color}
          imageUrl={topic.imageUrl} // ✅ pass the image
          orderImage={index % 2 !== 0}
        />
      ))}
    </section>
  );
}
