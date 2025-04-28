import {
  FaMicroscope,
  FaRecycle,
  FaRadiationAlt,
  FaSolarPanel,
  FaUsers,
  FaHome,
  FaCity,
} from "react-icons/fa";

function AboutCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-lg mb-10">
      <div className="bg-rose-50 border-l-4 border-rose-400 p-6 rounded-lg shadow-sm">
        <div className="flex items-center gap-4 mb-3 text-rose-700">
          <FaMicroscope size={24} />
          <h3 className="text-xl font-semibold">Building Toxicology</h3>
        </div>
        <p className="text-gray-700">
          Reducing hazardous materials in construction for healthier
          environments.
        </p>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg shadow-sm">
        <div className="flex items-center gap-4 mb-3 text-amber-700">
          <FaRecycle size={24} />
          <h3 className="text-xl font-semibold">Mass Excess Utilization</h3>
        </div>
        <p className="text-gray-700">
          Sustainable reuse of surplus materials from civil engineering
          projects.
        </p>
      </div>

      <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 rounded-lg shadow-sm">
        <div className="flex items-center gap-4 mb-3 text-indigo-700">
          <FaRadiationAlt size={24} />
          <h3 className="text-xl font-semibold">Low Radiation</h3>
        </div>
        <p className="text-gray-700">
          Designing safe indoor spaces with minimal radiation exposure.
        </p>
      </div>

      <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg shadow-sm">
        <div className="flex items-center gap-4 mb-3 text-green-700">
          <FaSolarPanel size={24} />
          <h3 className="text-xl font-semibold">Renewable Energy</h3>
        </div>
        <p className="text-gray-700">
          Integrating solar and renewable energy into building design.
        </p>
      </div>

      <div className="bg-sky-50 border-l-4 border-sky-400 p-6 rounded-lg shadow-sm">
        <div className="flex items-center gap-4 mb-3 text-sky-700">
          <FaUsers size={24} />
          <h3 className="text-xl font-semibold">Social Architecture</h3>
        </div>
        <p className="text-gray-700">
          Creating inclusive spaces that foster community and well-being.
        </p>
      </div>

      <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-lg shadow-sm">
        <div className="flex items-center gap-4 mb-3 text-purple-700">
          <FaHome size={24} />
          <h3 className="text-xl font-semibold">Small Houses</h3>
        </div>
        <p className="text-gray-700">
          Promoting efficient, minimal housing as a sustainable solution.
        </p>
      </div>

      <div className="bg-slate-50 border-l-4 border-slate-400 p-6 rounded-lg shadow-sm col-span-full">
        <div className="flex items-center gap-4 mb-3 text-slate-700">
          <FaCity size={24} />
          <h3 className="text-xl font-semibold">Sustainable City Planning</h3>
        </div>
        <p className="text-gray-700">
          Shaping urban development with long-term environmental and social
          goals in mind.
        </p>
      </div>
    </div>
  );
}

export default AboutCards;
