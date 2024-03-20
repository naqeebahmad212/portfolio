"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./theme-toggle";
import { Navbar } from "./Navbar/Navbar";
import "./components.css";
import Link from "next/link";
import {
  IconBrandFiverr,
  IconBrandUpwork,
  IconTruckLoading,
} from "@tabler/icons-react";

const Header = () => {
  return (
    <Drawer>
      <header className="sticky top-0 bg-transparent ">
        <nav className="w-full p-4 flex items-center justify-between px-10 bg-transparent z-30 ">
          <div className="brand text-2xl font-bold">
            Port <span className="text-themeText">Folio</span>
          </div>

          <div className="flex items-center">
            <ModeToggle />

            <DrawerTrigger className="hire-button text-foreground">
              Hire Me
            </DrawerTrigger>
          </div>
        </nav>
      </header>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            Which MarketPlace would you like to hire me on?
          </DrawerTitle>
          {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
        </DrawerHeader>
        <DrawerFooter className="">
          <div className="flex gap-5">
            <Link href={"https://www.fiverr.com/s/Geo9Kd"} target="_blank">
              <IconBrandFiverr /> Fiverr
            </Link>
            <Link
              href={"https://www.upwork.com/freelancers/~01d63dc870a67d5e23"}
              target="_blank"
            >
              <IconBrandUpwork /> Upwork
            </Link>
            <p className="self-end text-center">
              <IconTruckLoading /> More coming soon...
            </p>
          </div>

          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Header;
