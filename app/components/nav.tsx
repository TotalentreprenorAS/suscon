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
      <div className="bg-[#EDEADE]">
        <nav className="flex justify-between items-center h-34 px-8 py-4 bg-[#EDEADE] text-black container">
          <img src="/images/suscon-logo.png" className="w-72" />
          <ul className="flex gap-10">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <h2>Contact</h2>
        </nav>
      </div>
    </header>
  );
}
export default NavigationBar;
