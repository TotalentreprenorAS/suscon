import { BsTelephone } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-20 text-black">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center md:flex-row md:justify-between md:items-start flex-wrap gap-8 md:text-left container">
        {/* Addresse */}
        <div className="flex flex-col gap-2 ">
          <h3 className="text-lg">Besøksadresse</h3>
          <p className="font-bold"> Bergen: </p>
          <div className="flex gap-2 items-center">
            <p className="text-md">Conrad Mohrs veg 15</p>
            <p className="text-md"> 5056, Bergen </p>
          </div>
        </div>
        {/* Kontaktinformasjon */}
        <div className="flex flex-col gap-2 ">
          <h3 className="text-lg">Kontaktinformasjon</h3>
          <a href="tel:+4740580085" className="flex gap-2 items-center">
            <BsTelephone className="text-lg" />
            <p className="">
              Not available. <span className="font-bold">(SMS)</span>
            </p>
          </a>
          <p> contact@suscon.eu </p>
        </div>
      </div>
    </footer>
  );
}
