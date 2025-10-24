import React from "react";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  // Add more links here if needed
];

function NavigationBar(): React.JSX.Element {
  return (
    // NavigationBar.tsx
    <header className="absolute top-0 left-0 w-full z-20">
      <nav className=" container flex justify-between items-center px-8 text-white">
        <img src="/images/suscon-logo.png" className="w-64" />
        <ul className="flex gap-10">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:underline text-xl font-semibold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <h2 className="font-semibold text-xl">Contact</h2>
      </nav>
    </header>
  );
}
export default NavigationBar;
