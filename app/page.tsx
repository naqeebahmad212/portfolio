import HeroSection from "@/components/HeroSection";
import { PageWrapper } from "@/components/PageWrapper";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <PageWrapper>
      <div className="flex">
        <section>
          <HeroSection />
        </section>
      </div>
    </PageWrapper>
  );
};

export default Home;
