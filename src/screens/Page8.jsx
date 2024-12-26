import { Flex } from "@chakra-ui/react";
import React from "react";
import page8Video from "../assets/1.webm";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Page8 = () => {
  useGSAP(() => {
    gsap.from("#page8Text>span", {
      rotate: "30deg",
      y: "100%",
      stagger: 0.2,
      opacity: 0,
      scrollTrigger: {
        trigger: "#Page8",
        scroller: "#main",
        start: "top 10%",
        end: "top 0%",
        scrub: 2,
      },
    });
    gsap.from("#lmBtn", {
      top: "90%",
      opacity: 0,
      scrollTrigger: {
        trigger: "#Page8",
        scroller: "#main",
        start: "top 10%",
        end: "top 0%",
        scrub: 2,
      },
    });
  }, []);
  return (
    <Flex
      height="100vh"
      width="100vw"
      background="black"
      id="Page8"
      position="relative"
      overflow="hidden"
    >
      <Flex
        position="absolute"
        overflow="hidden"
        color="#ffffff"
        width="fit-content"
        height="fit-content"
        zIndex="10"
        top="60%"
        left="50%"
        transform="translate(-50%,-50%)"
        fontFamily="jost"
        fontSize={{ base: "15vw", sm: "10vw", md: "6vw" }}
        id="page8Text"
        gap="10px"
      >
        <span>Magma </span>
        <span> DTT®</span>
      </Flex>
      <Flex
        position="absolute"
        zIndex="10"
        top="80%"
        left="50%"
        transform="translate(-50%,-50%)"
        id="lmBtn"
      >
        <button className="learnMore">
          <span className="learnMoreHoverEffect">LEARN MORE</span>
          Learn More
          <span className="backDrop"></span>
        </button>
      </Flex>
      <video src={page8Video} id="page8Video" autoPlay muted loop></video>
    </Flex>
  );
};

export default Page8;
