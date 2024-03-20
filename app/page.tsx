import HeroSection from "@/components/HeroSection";
import { PageWrapper } from "@/components/PageWrapper";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import React from "react";

const Home = () => {
  return (
    <PageWrapper>
      <div className="flex">
        <section>
          <MacbookScroll
            badge={
              <div className="text-primary z-0">
                {" "}
                Port <span className="text-themeText">Folio</span>{" "}
              </div>
            }
            showGradient={true}
            className="fixed top-0 pt-50 left-[30%] opacity-90"
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <HeroSection />
        </section>
      </div>
    </PageWrapper>
  );
};

export default Home;
