import React, { useEffect, useRef, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, Stack, HStack, Image } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: kh.tanya.v@gmail.com",
    title: "email",
  },
  {
    icon: faGithub,
    url: "https://github.com/tatianakharitonovich",
    title: "github",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/tatiana-kharitonovich-0b2b2791/",
    title: "linkedin",
  },
];

const Header = () => {
  let ref = useRef(window.scrollY);
  const [scrollDirection, setScrollDirection] = useState("none");

  const handleScroll = (e) => {
    if (ref.current > window.scrollY) {
      setScrollDirection("up")
    } else if (ref.current < window.scrollY) {
      setScrollDirection("down")
    }
    ref.current = window.scrollY;
  }

  useEffect(()=> {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transform={`translateY(${scrollDirection==="down" ? "-200px" : 0})`}      
      zIndex={1}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#970747"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <Stack
          direction={['column', 'row']} spacing='24px'
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={16}>
              <a href="#">
                <Image
                  src={require("../images/logo.jpg")}
                  height={"80px"}
                  minWidth={"63px"}
                />
              </a>
              <HStack spacing={8}>
                {socials.map(social => {
                  return (
                    <a
                      key={social.url}
                      href={social.url}
                      target="_blank"
                      title={social.title}
                    >
                      <FontAwesomeIcon icon={social.icon} size="2x" />
                    </a>
                  )              
                })}
              </HStack>
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#projects">Projects</a>
              <a href="#contactme">Contact Me</a>
            </HStack>
          </nav>
        </Stack>
      </Box>
    </Box>
  );
};
export default Header;
