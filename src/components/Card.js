import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, href }) => {
  return (
    <VStack
      backgroundColor="white"
      color="black"
      borderRadius="lg"
    >
      <Image
        src={imageSrc}
        borderRadius="lg"
      /> 
      <VStack
        alignItems="flex-start"
        height="100%"
        width="100%"
        justifyContent="space-between"
        px={3}
        py={4}
      >
        <Heading as="h5" fontSize="xl">{title}</Heading>
        <Text color="gray">{description}</Text>
        <a href={href} target="_blank">
          <HStack>
            <p>See more</p>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>        
        </a>
      </VStack>      
    </VStack>
  );
};

export default Card;
