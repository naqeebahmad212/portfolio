"use client";
import React from "react";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import PersonIcon from "@mui/icons-material/Person";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import FeedbackIcon from "@mui/icons-material/Feedback";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";

import ContactMailIcon from "@mui/icons-material/ContactMail";
import { usePathname } from "next/navigation";

function SideNav() {
  const links = [
    { route: "/", label: "Home", icon: <HomeIcon /> },
    { route: "/about", label: "About", icon: <PersonIcon /> },
    { route: "/service", label: "Services", icon: <WorkspacesIcon /> },
    { route: "/project", label: "Projects", icon: <SpaceDashboardIcon /> },
    { route: "/feedback", label: "Feedback", icon: <FeedbackIcon /> },
    { route: "/contact", label: "Cantact", icon: <ContactMailIcon /> },
  ];

  const path = usePathname();

  return (
    <div className="sideNav fixed top-[26%] right-[1%] rounded-full bg-gray-400 bg-opacity-10 z-[9999]">
      <ul className="flex flex-col gap-5 p-5">
        {links.map((link) => (
          <Link
            href={link.route}
            key={link.route}
            className="relative cursor-pointer"
          >
            <HoverCard>
              <HoverCardTrigger
                className={`cursor-pointer ${path == link.route && "text-themeText"}`}
              >
                {link.icon}
              </HoverCardTrigger>
              <HoverCardContent
                className={`absolute -top-6 right-[15px] rounded-none w-20 flex justify-center p-0 border-none bg-slate-100 text-gray-700 text-sm`}
              >
                {" "}
                {link.label}
              </HoverCardContent>
            </HoverCard>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default SideNav;
