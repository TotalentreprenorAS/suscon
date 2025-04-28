import React from "react";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Om Oss", href: "/om-oss" },
  { label: "Prosjekter", href: "/prosjekter" },
  // Add more links here if needed
];

function NavigationBar(): React.JSX.Element {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="flex justify-between items-center px-8 py-4 bg-white/20 text-black">
        <h1 className="text-2xl font-bold">Suscon</h1>
        <ul className="flex gap-10">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <h2>Contact</h2>
      </nav>
    </header>
  );
}
export default NavigationBar;
