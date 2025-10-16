"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdOutlineMenu } from "react-icons/md";
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed px-10 top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#7B8AEA]">
          Gresaudia
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200">
          <Link href="#home" className="hover:text-[#7B8AEA]">
            Home
          </Link>
          <Link href="#projects" className="hover:text-[#7B8AEA]">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-[#7B8AEA]">
            Contact
          </Link>
        </div>

        {/* Menu Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 dark:text-gray-200"
        >
          {open ? <LiaTimesSolid size={28} /> : <MdOutlineMenu size={28} />}
        </button>
      </div>

      {/* Dropdown Mobile */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col items-center gap-4 py-4 text-gray-700 dark:text-gray-200">
            <Link href="#home" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="#projects" onClick={() => setOpen(false)}>
              Projects
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="#contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
