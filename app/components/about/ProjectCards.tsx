import {
  FaMicroscope,
  FaRecycle,
  FaRadiationAlt,
  FaSolarPanel,
  FaUsers,
  FaHome,
  FaCity,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";

// const topics = [
//   {
//     title: "Topic 1",
//     text: "Reducing hazardous materials in construction for healthier environments.",
//     color: "bg-rose-50",
//     imageUrl: "/rodion-kutsaiev-PEm_sLmJT-w-unsplash-1.avif",
//   },
//   {
//     title: "Topic 2",
//     text: "Reusing surplus materials from engineering projects to reduce waste.",
//     color: "bg-amber-50",
//     imageUrl: "/rodion-kutsaiev-PEm_sLmJT-w-unsplash-1.avif",
//   },
//   {
//     title: "Topic 3",
//     text: "Designing safe indoor spaces with minimal radiation exposure.",
//     color: "bg-indigo-50",
//     imageUrl: "/rodion-kutsaiev-PEm_sLmJT-w-unsplash-1.avif",
//   },
//   {
//     title: "Topic 4",
//     text: "Embedding solar and clean energy into the built environment.",
//     color: "bg-green-50",
//     imageUrl: "/rodion-kutsaiev-PEm_sLmJT-w-unsplash-1.avif",
//   },
//   {
//     title: "Topic 5",
//     text: "Creating inclusive spaces that foster community and well-being.",
//     color: "bg-sky-50",
//     imageUrl: "/rodion-kutsaiev-PEm_sLmJT-w-unsplash-1.avif",
//   },
//   {
//     title: "Topic 6",
//     text: "Promoting compact, efficient living solutions for a lower footprint.",
//     color: "bg-purple-50",
//     imageUrl: "/rodion-kutsaiev-PEm_sLmJT-w-unsplash-1.avif",
//   },
//   {
//     title: "Topic 7",
//     text: "Shaping urban development through green zoning and infrastructure.",
//     color: "bg-slate-50",
//     imageUrl: "/rodion-kutsaiev-PEm_sLmJT-w-unsplash-1.avif",
//   },
// ];

function ProjectCards({ topics, index }: any) {
  return (
    <div
      key={index}
      className="relative w-[300px] h-[180px] sm:w-[280px] md:w-[300px] lg:w-[320px] mb-10"
    >
      {/* Background offset */}
      <div className="absolute bottom-2 left-[-10px] bg-gray-700 w-full h-full rounded-md -z-10"></div>

      {/* Card */}
      <div className="p-4 bg-white shadow-lg rounded-md h-full flex flex-col justify-between">
        {/* Title */}
        <h3 className="text-rose-700 text-base font-semibold leading-snug">
          {topics.title}
        </h3>

        {/* Text */}
        <p className="text-gray-700 text-sm flex-grow border-b border-gray-200 pb-2 mt-1">
          {topics.text}
        </p>

        {/* Email */}
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-700">
          <FaEnvelope size={12} className="text-rose-700" />
          <p>{topics.email}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
