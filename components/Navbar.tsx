"use client";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  //fixed navbar on scroll
  const [fix, setFix] = useState(false);
  const setFixedNav = () => {
    if (window.scrollY >= 50) {
      setFix(true);
    } else {
      setFix(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", setFixedNav);
    return () => {
      window.removeEventListener("scroll", setFixedNav);
    };
  }, []);
  return (
    <div
      className={
        !fix
          ? "w-full bg-transparent flexBetween max-container padding-container fixed z-30 py-5 transition-all duration-500 ease-in-out"
          : "w-full theme_color shadow-bottom flexBetween max-container padding-container py-5 z-30 fixed top-0 transition-all duration-500 ease-in-out"
      }
    >
      {/* <Image/> */}
      <span className={`bold-32 ${isHomePage ? "text-white" : "text-black"}`}>
        EAIN
      </span>
      <ul
        className={`hidden h-full lg:flex gap-6 ${
          isHomePage ? "text-white" : "text-black"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key}>
            {link.label}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
