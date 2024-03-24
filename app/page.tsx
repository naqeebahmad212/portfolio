import HeroSection from "@/components/HeroSection";
import { PageWrapper } from "@/components/PageWrapper";
import { Services } from "@/components/services";

import { Button } from "@/components/ui/button";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import React from "react";

const Home = () => {
  return (
    <PageWrapper>
      <div className="">
        <section>
          <HeroSection />
        </section>
      </div>

      <section className="relative  h-screen">
        <Services />
      </section>
    </PageWrapper>
  );
};

export default Home;
