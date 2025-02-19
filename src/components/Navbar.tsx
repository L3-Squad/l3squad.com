"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeChanger from "./DarkSwitch";
import { useTheme } from "next-themes";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

export const Navbar = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { name: "Who are we?", id: "home" },
    { name: "What do we do?", id: "projects" },
    { name: "What do you get?", id: "benefits" },
    { name: "Want to know more?", id: "video" },
    { name: "What do people say?", id: "testimonials" },
    { name: "Got Questions?", id: "faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 z-50 shadow-md">
        <div className="container flex items-center justify-between p-4 mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={theme === "dark" ? "/img/L3SQUAD_White.png" : "/img/L3SQUAD_Dark.png"}
              width={100}
              height={100}
              alt="L3 Squad Logo"
              className="w-20 ml-4"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <li key={section.id}>
                <Link
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`px-4 py-2 text-sm rounded-md uppercase ${
                    activeSection === section.id
                      ? "text-customBlue font-semibold"
                      : "text-gray-800 dark:text-gray-200 hover:text-customBlue"
                  }`}
                >
                  {section.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side: Theme Switch & Mobile Menu Button */}
          <div className="flex items-center space-x-4 ml-auto">
            {/* Theme Switch */}
            <ThemeChanger />

            {/* Mobile Menu Button (Only on Small Screens) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="block md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md p-4">
            <ul className="flex flex-col space-y-4">
              {sections.map((section) => (
                <li key={section.id}>
                  <Link
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false); // Close menu after click
                      document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`block px-4 py-2 text-sm rounded-md uppercase ${
                      activeSection === section.id
                        ? "text-customBlue font-semibold"
                        : "text-gray-800 dark:text-gray-200 hover:text-customBlue"
                    }`}
                  >
                    {section.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};
