"use client";
import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./theme-toggle";
import { Navbar } from "./Navbar/Navbar";

const Header = () => {
  return (
    <header className="sticky top-0 ">
      <nav className="w-full p-4 flex items-center justify-between px-10 ">
        <div className="brand text-2xl font-bold">
          Port <span className="text-themeText">Folio</span>
        </div>

        <div className="flex items-center">
          <ModeToggle />
          <Button className="ml-3 relative hire-btn hover:bg-hoverCol rounded-md hover:rotate-2 hover:-translate-y-1 transition-all ease-in  duration-300">
            Hire me
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
