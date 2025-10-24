import { Team } from "../data/team"
import { FaEnvelope } from "react-icons/fa"
import { FaIndustry } from "react-icons/fa"
import Link from "next/link"
export default function ContactPage() {
    return ( 
        <section className="container mx-auto px-4 py-20"> 
        <h1 className="text-4xl font-bold text-center mb-10"> Meet the people behind Suscon </h1> 

<div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

{Team.map((t, index) => (
         <div key={index} className="max-w-6-xl mb-5 flex w-full">
              <div className="bg-gray-700 w-48 h-96">
             </div>
             <div className="p-3 shadow-sm">
               <div className="flex flex-col mt-2"> 
                 <div className="flex gap-1 items-center">
                <img src={t.image} alt={t.name} className="w-48"/>
               </div>
                <div className="flex items-center gap-4">
                 <h3 className="text-sm font-semibold text-rose-700">{t.name}</h3>
               </div>
                <h3 className="text-rose-700 text-sm font-semibold">
                 {t.education}
               </h3>
               <div className="flex gap-2">
                <FaEnvelope/> 
               <p className="text-gray-700 text-sm">
                {t.email}
               </p>
               </div> 
                 <div className="flex gap-2">
                <FaIndustry/> 
               <p className="text-gray-700 text-sm">
                 {t.role}
               </p>
               </div> 
               <div className="flex justify-end"> 
               <Link href={`/contact/${t.slug}`} className="text-xs text-rose-700">
                See profile
               </Link>
               </div> 
               </div> 
             </div>
             </div> 
))
}
</div>
</section>
    )}