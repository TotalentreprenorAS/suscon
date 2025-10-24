import { BsTelephone } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-black p-2 text-sm">
      <div className="flex justify-between flex-wrap gap-5 container items-center p-2">
        <div className="flex gap-2"> 
          <h2 className=""> Address: </h2> 
          <p> Conrads Mohrs veg 15, N-5072, Bergen, Norway </p>
          </div> 
          <div className="flex items-center gap-2"> 
            <div className="flex items-center gap-2"> 
          <BsTelephone/> 
          <p>+47 40580085 </p>
          </div>  
          <p> Email: contact@suscon.eu</p> 
        </div> 
      </div> 
    </footer>
  );
}


