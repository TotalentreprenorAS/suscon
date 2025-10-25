import { BsTelephone } from "react-icons/bs";
import { BsGeoAlt } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 border-t border-gray-300 text-sm">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 py-4 px-6">
        {/* Address */}
        <div className="flex items-center gap-2 text-center sm:text-left flex-wrap justify-center sm:justify-start">
          <BsGeoAlt className="text-rose-700 text-lg" />
          <span className="font-semibold text-gray-900">Address:</span>
          <p>Conrads Mohrs veg 15, N-5072, Bergen, Norway</p>
        </div>

        {/* Contact Info */}
        <div className="flex items-center gap-4 text-center sm:text-left flex-wrap justify-center sm:justify-end">
          <div className="flex items-center gap-2">
            <BsTelephone className="text-rose-700 text-lg" />
            <p className="text-gray-800 font-medium">+47 40580085</p>
          </div>
          <p>
            <span className="font-semibold text-gray-900">Email:</span>{" "}
            <a
              href="mailto:contact@suscon.eu"
              className="text-rose-700 hover:underline transition-all duration-200"
            >
              contact@suscon.eu
            </a>
          </p>
        </div>
      </div>
      <div className="text-xs text-gray-500 mt-2 text-center border-t border-gray-300 py-2 bg-gray-50">
        © {new Date().getFullYear()} Suscon. All rights reserved.
      </div>
    </footer>
  );
}
