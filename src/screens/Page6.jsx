import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { colors } from "../constants/colors";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import useLocoScroll from "../hooks/useLocoScroll";

const Page6 = () => {
  const [sentense, setSentence] = useState();
  useLocoScroll(true);

  useGSAP(() => {
    gsap.to(".animatedTextPage6>span", {
      color: "white",
      stagger: 0.5,
      scrollTrigger: {
        trigger: "#page6",
        scroller: "#main",
        scrub: 2,
        start: "top 50%",
        end: "top 10%",
      },
    });
  }, []);

  return (
    <Flex
      id="page6"
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
        Increase your Digital Twin Token’s value.
      </Text>
      <Flex
        gap="10px"
        flexWrap="wrap"
        fontWeight="320"
        fontSize={{ base: "8.5vw", md: "4vw" }}
        lineHeight={{ base: "8vw", md: "4.5vw" }}
        marginTop="30px"
        className="animatedTextPage6"
      >
        <span>DTT®</span>
        <span>data</span>
        <span>increases</span>
        <span>the</span>
        <span>value</span>
        <span>of</span>
        <span>your</span>
        <span>digital</span>
        <span>asset</span>
        <span>by</span>
        <span>lowering</span>
        <span>operational</span>
        <span>costs</span>
        <span>,</span>
        <span>improving</span>
        <span>energy</span>
        <span>use</span>
        <span>,</span>
        <span>assisting</span>
        <span>commercialization</span>
        <span>,</span>
        <span>and</span>
        <span>boosting</span>
        <span>the</span>
        <span>liquidity</span>
        <span>of</span>
        <span>your</span>
        <span>building</span>
        <span>.</span>
      </Flex>
    </Flex>
  );
};

export default Page6;
