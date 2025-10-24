// // components/SplitSection.tsx
// import React from "react";

// interface SplitSectionProps {
//   title: string;
//   text: string;
//   color: string;
//   textColor?: string;
//   orderImage?: boolean;
//   imageUrl: string;
// }

// const SplitSection: React.FC<SplitSectionProps> = ({
//   title,
//   text,
//   color,
//   textColor = "text-gray-900",
//   orderImage = false,
//   imageUrl,
// }) => {
//   return (
//     <section className={`${color} py-16`}>
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
//         {/* Text Section */}
//         <div className={`${textColor} ${orderImage ? "md:order-last" : ""}`}>
//           <h2 className="text-3xl font-bold mb-4">{title}</h2>
//           <p className="text-lg text-opacity-90">{text}</p>
//         </div>

//         {/* Image Section */}
//         <div className="h-64 md:h-80 rounded-lg shadow-inner overflow-hidden">
//           <img
//             src={imageUrl}
//             alt={title}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SplitSection;
