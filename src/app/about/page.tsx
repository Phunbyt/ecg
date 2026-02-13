import React from "react";
import HeroSection from "../../components/about/HeroSection";
import MissionSection from "../../components/about/MissionSection";
import HireWithKopekSection from "../../components/about/HireWithKopek";
import OurTeamSection from "../../components/about/OurTeam";
import OurStorySection from "@/components/about/OurStory";

const About = () => {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <HireWithKopekSection />
      <OurTeamSection />
      <OurStorySection />
    </>
  );
};

export default About;
