"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const navigationItems = [
  { label: "Areas of research", href: "/areasofresearch" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function NavigationBar(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white w-full shadow-md fixed top-0 left-0 z-50 h-25">
      <nav className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <img
            src="/images/suscon-logo.png"
            alt="Suscon logo"
            width={200}
            height={60}
            className="w-48 h-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-black hover:text-rose-700 hover:underline underline-offset-4 text-lg font-medium tracking-wide transition-all duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-black text-2xl focus:outline-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Dark Overlay (background) */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 flex flex-col items-start px-8 py-10 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-gray-700 text-2xl hover:text-rose-700 transition-colors duration-200 cursor-pointer"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <FaTimes />
        </button>

        {/* Menu Items */}
        <ul className="flex flex-col gap-6 mt-10 w-full">
          {navigationItems.map((item) => (
            <li key={item.href} className="w-full">
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-semibold text-gray-800 hover:text-rose-700 transition-all duration-200 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-rose-700 hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Optional footer text or contact */}
        <div className="mt-auto pt-10 text-sm text-gray-500 border-t w-full">
          <p>© {new Date().getFullYear()} Suscon</p>
        </div>
      </div>
    </header>
  );
}
