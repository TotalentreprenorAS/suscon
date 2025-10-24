const subjects = [
  {
    title: "Urban toxicology",
    description:
      "Urban toxicology studies how pollutants in cities affect human health and ecosystems. It provides insight into exposure risks and supports science-based solutions for safer urban environments.",
    image: "/images/urbantoxicology.jpg",
  },
  {
    title: "Green architecture",
    description:
      "Green architecture promotes sustainability through design, reducing the ecological footprint of buildings and improving the quality of life.",
    image: "/images/socialarchitecture.jpg",
  },
];

function SubjectCards() {
  return (
    <div className="flex flex-col items-center gap-20 py-20 container max-w-[1000px]">
      {subjects.map((subject, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={index}
            className={`relative flex flex-col lg:flex-row mb-20 ${
              !isEven ? "lg:flex-row-reverse" : ""
            } items-center justify-end w-full`}
          >
            {/* Image */}
            <div>
              <img
                src={subject.image}
                alt={subject.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Text Card */}
            <div
              className={`flex flex-col justify-center w-full bg-white shadow-lg p-6 rounded-md lg:max-w-md z-10 lg:h-72 lg:absolute lg:top-1/2 lg:-translate-y-1/2 ${
                isEven ? "lg:left-[-20px]" : "lg:right-[-20px]"
              }`}
            >
              <h3 className="text-lg font-bold mb-2">{subject.title}</h3>
              <p className="text-sm text-gray-700 mb-4">
                {subject.description}
              </p>
              <button className="bg-[#00C288] text-white text-sm font-medium px-4 py-2 rounded w-fit">
                Learn more
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SubjectCards;
