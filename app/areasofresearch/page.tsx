import ProjectCards from "../components/about/ProjectCards";

const topics = [
  {
    title: "Sustainable use and re-use of building materials",
    text: "from an economical and sustainable perspective.",
    person: "Omar Heymans",
    email: "contact@suscon.eu",
  },
  {
    title: "Urban toxicology",
    text: "Limiting the negative exposure to chemical and electromagnetic sources in our urban environment.",
    person: "Omar Heymans",
    email: "contact@suscon.eu",
  },
  {
    title: "Remediation of water and soil",
    text: "Cleansing polluted soil, wastewater and sludge of unwanted properties.",
    person: "Omar Heymans",
    email: "contact@suscon.eu",
  },
  {
    title: "Shore-line biodiversity",
    text: "The way we build along our shore-lines.",
    person: "Omar Heymans",
    email: "contact@suscon.eu",
  },
  {
    title: "Small living",
    text: "in a socio-economical, sustainable and futuristic perspection.",
    person: "Omar Heymans",
    email: "contact@suscon.eu",
  },
  {
    title: "Construction and the preservation of cultivated land",
    text: "Development without reducing our food production potential.",
    person: "Omar Heymans",
    email: "contact@suscon.eu",
  },
  {
    title: "Live-cycle prospection",
    text: "Our constructed enviroment in a 50 years, 100 years 250 years perspective.",
    person: "Omar Heymans",
    email: "contact@suscon.eu",
  },
  {
    title: "Social architecture",
    text: "How we live and interact.",
    person: "Omar Heymans",
    email: "contact@suscon.eu",
  },
  {
    title: "Mass excess utilization",
    text: "Finding the best ways to utilize excess masses from civil engineering projects.",
    person: "Omar Heymans",
    email: "contact@suscon.eu",
  },
];

export default function AreasOfResearch() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-10">
        Areas of Research
      </h1>

      <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12 font-semibold">
        At Suscon, we specialize in key areas of sustainable construction and
        environmental impact. Our multidisciplinary approach shapes the future
        of building in a responsible way.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {topics.map((topic, index) => (
          <ProjectCards key={index} topics={topic} index={index} />
        ))}
      </div>
    </section>
  );
}
