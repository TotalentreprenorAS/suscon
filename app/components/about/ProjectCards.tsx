import {
  FaMicroscope,
  FaRecycle,
  FaRadiationAlt,
  FaSolarPanel,
  FaUsers,
  FaHome,
  FaCity,
  FaUser,
  FaEnvelope
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





function ProjectCards({topics, index}: any) {
  return (
    <div key={index} className="max-w-6xl mx-auto text-lg mb-5 flex">
       <div className="bg-gray-700 w-[100px] h-full">
      </div>
      <div className="p-3 shadow-sm w-[250px]">
        <div className="flex items-center gap-4 text-rose-700">
          <h3 className="text-sm font-semibold">{topics.title}</h3>
        </div>
        <p className="text-gray-700 text-sm border-gray-300 border-b w-50">
          {topics.text}
        </p>
        <div className="flex flex-col mt-2"> 
          {/* <div className="flex gap-1 items-center">
         <FaUser size={12}/>
         <p className="text-gray-700 text-sm">
         {topics.person}
        </p>
        </div> */}
         <div className="flex gap-1 items-center">
         <FaEnvelope size={12}/>
         <p className="text-gray-700 text-sm">
          {topics.email}
        </p>
        </div> 
        </div> 
      </div>
</div>
  )}

export default ProjectCards;
