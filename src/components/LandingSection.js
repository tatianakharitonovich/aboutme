import React from "react";
import { Heading, VStack, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Tanya!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React, Vue";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    backgroundColor="rgba(213, 173, 193, 0.5)"
  >    
    <VStack spacing={4}>
      <Image
        src={require("../images/me.jpg")}
        width={"350px"}
        height={"350px"}
        borderRadius={"full"}
        objectFit={"cover"}
      />
      <Heading as="h6" size={"md"} >{greeting}</Heading>
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
