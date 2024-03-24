"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import React from "react";
import { ModeToggle } from "./theme-toggle";
import "./components.css";
import Link from "next/link";
import {
  IconBrandFiverr,
  IconBrandUpwork,
  IconTruckLoading,
} from "@tabler/icons-react";

const Header = () => {
  return (
    <AlertDialog>
      <header className="sticky top-0 bg-transparent z-[999] ">
        <nav className="w-full p-4 flex items-center justify-between px-10 bg-transparent z-30 ">
          <div className="brand text-2xl font-bold">
            Port <span className="text-themeText">Folio</span>
          </div>

          <div className="flex items-center ">
            <ModeToggle />

            <AlertDialogTrigger className="hire-button text-foreground z-[999]">
              Hire Me
            </AlertDialogTrigger>
          </div>
        </nav>
      </header>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Which Marketpalce would you prefer?
          </AlertDialogTitle>
          <AlertDialogDescription className="flex gap-5">
            <Link href={"https://www.fiverr.com/s/Geo9Kd"} target="_blank">
              <IconBrandFiverr className="hover:scale-110 transition-all duration-300" />{" "}
              Fiverr
            </Link>
            <Link
              href={"https://www.upwork.com/freelancers/~01d63dc870a67d5e23"}
              target="_blank"
            >
              <IconBrandUpwork className="hover:scale-110 transition-all duration-300" />{" "}
              Upwork
            </Link>
            <p className="self-end text-center">
              <IconTruckLoading /> More coming soon...
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="hover:bg-hoverCol">
            <Link href={"https://www.fiverr.com/s/Geo9Kd"} target="_blank">
              Continue
            </Link>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Header;
