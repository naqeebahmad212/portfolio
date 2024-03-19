"use client";
import { PageWrapper } from "@/components/PageWrapper";
import Shpere from "@/components/Shpere";

import React from "react";

const page = () => {
  return (
    <PageWrapper>
      <Shpere className="absolute top-0 right-0" />
    </PageWrapper>
  );
};

export default page;
