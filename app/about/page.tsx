"use client";
import { PageWrapper } from "@/components/PageWrapper";
import Shpere from "@/components/Shpere";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

import React from "react";

const page = () => {
  return (
    <PageWrapper className="h-[120vh]">
      <MacbookScroll
        title={"this is example animation"}
        badge={"Iam badge"}
        src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dz"
      />
    </PageWrapper>
  );
};

export default page;
