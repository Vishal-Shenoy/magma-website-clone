import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { colors } from "../constants/colors";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import useLocoScroll from "../hooks/useLocoScroll";

const Page2 = () => {
  const [sentense, setSentence] = useState();
  useLocoScroll(true);

  useGSAP(() => {
    gsap.to(".animatedText>span", {
      color: "white",
      stagger: 0.5,
      scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        scrub: 2,
        start: "top 50%",
        end: "top 10%",
      },
    });
  }, []);

  return (
    <Flex
      id="page2"
      background={colors.primaryBackground}
      minHeight="100vh"
      width="100vw"
      position="relative"
      paddingTop="150px"
      paddingInline={{ base: "20px", sm: "30px", md: "80px", lg: "150px" }}
      fontSize="18px"
      color="white"
      flexDirection="column"
    >
      <Text textTransform="uppercase" fontFamily="jost">
        Certify your building as a Digital Twin Token (DTT®).
      </Text>
      <Flex
        gap="10px"
        flexWrap="wrap"
        fontWeight="320"
        fontSize={{ base: "8.5vw", md: "4vw" }}
        lineHeight={{ base: "8vw", md: "4.5vw" }}
        marginTop="30px"
        className="animatedText"
      >
        <span>The</span>
        <span>Digital</span>
        <span>Twin</span>
        <span>Token</span>
        <span>is</span>
        <span>a</span>
        <span>unique</span>
        <span>digital</span>
        <span>asset</span>
        <span>backed</span>
        <span>by</span>
        <span>property</span>
        <span>data.</span>
        <span>Magma</span>
        <span>combines</span>
        <span>your</span>
        <span>building’s</span>
        <span>components</span>
        <span>and</span>
        <span>systems'</span>
        <span>essential</span>
        <span>information</span>
        <span>into</span>
        <span>a</span>
        <span>DTT®.</span>
      </Flex>
    </Flex>
  );
};

export default Page2;
