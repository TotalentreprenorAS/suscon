import React from "react";
import Link from "next/link";

const navigationItems = [
  { label: "Areas of research", href: "/areasofresearch" },
  { label: "Projects", href: '/projects'},
  { label: "Contact", href: '/contact'}  
];

function NavigationBar(): React.JSX.Element {
  return (
    <header className="bg-white w-full h-25">
      <nav className="container flex justify-between items-center px-8 text-white">
        <Link href="/">
        <img src="/images/suscon-logo.png" className="w-64" />
        </Link>
        <ul className="flex gap-10 align-center">
          {navigationItems.map((item) => (
            <li key={item.href} className="text-black">
              <a
                href={item.href}
                className="hover:underline text-xl font-semibold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>h 
      </nav>
    </header>
  );
}
export default NavigationBar;
