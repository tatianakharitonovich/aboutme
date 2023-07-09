import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Poker Game",
    description:
      "This game is a web app built using the latest technologies such as TypeScript, React TS, CSS, and MobX. The robot players are smart enough. You may get the impression that you are playing with real people.",
      getImageSrc: () => require("../images/poker.jpg"),
      href: "https://tatianakharitonovich.github.io/Poker-Game/",
  },
  {
    title: "Picipo",
    description:
      "Unified NFT management platform. Communicate with your followers like never before & broaden your horizons of secondary market liquidity 🔥️",
    getImageSrc: () => require("../images/picipo.jpg"),
    href: "https://app.picipo.io/",
  },
  {
    title: "Fevera",
    description:
      "Fevera is a unique, multi-chain fabrication simulator created to gamify crypto assets generation.",
    getImageSrc: () => require("../images/fevera.jpg"),
    href: "https://fevera.io/",
  },
  {
    title: "Freepo",
    description:
      "Picipo version without moderation",
    getImageSrc: () => require("../images/freepo.jpg"),
    href: "https://freepo.io/",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#660528"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            href={project.href}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
