import { Team } from "../data/team";
import { FaEnvelope } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa";
import Link from "next/link";
export default function ContactPage() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-10">
        Meet the people behind Suscon
      </h1>

      <div className="flex gap-10 mt-10">
        {Team.map((t, index) => (
          <div key={index} className="relative max-w-xs mb-10">
            {/* Blue background stretched behind the whole card */}
            <div className="absolute bottom-5 right-5 bg-gray-700 w-full h-full -z-10"></div>

            {/* Card container */}
            <div className="bg-white shadow-lg overflow-hidden">
              {/* Image section */}
              <div className="relative w-full h-96">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text content underneath */}
              <div className="p-4">
                <h3 className="text-md font-semibold text-rose-700">
                  {t.name}
                </h3>
                <p className="text-rose-700 text-sm font-semibold">
                  {t.education}
                </p>
                <div className="flex gap-2 items-center mt-1">
                  <FaEnvelope />
                  <p className="text-gray-700 text-sm">{t.email}</p>
                </div>
                <div className="flex gap-2 items-center mt-1">
                  <FaIndustry />
                  <p className="text-gray-700 text-sm">{t.role}</p>
                </div>
                <div className="flex justify-end mt-2">
                  <Link
                    href={`/contact/${t.slug}`}
                    className="text-xs text-rose-700"
                  >
                    See profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
