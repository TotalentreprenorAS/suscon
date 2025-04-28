import React from "react";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Projects", href: "/projects" },
  // Add more links here if needed
];

function NavigationBar(): React.JSX.Element {
  return (
    <header className="">
      <nav className="flex justify-between items-center px-8 py-4 bg-white/20 text-black">
        <a href="/" className="text-2xl font-bold">
          Suscon
        </a>
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
