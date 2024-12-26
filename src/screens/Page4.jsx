import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { colors } from "../constants/colors";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Page4 = () => {
  useGSAP(() => {
    gsap.to(".animatedTextt>span", {
      color: "white",
      stagger: 0.5,
      scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        scrub: 2,
        start: "top 50%",
        end: "top 30%",
        onEnter: () => console.log("came"),
      },
    });
  }, []);

  return (
    <Flex
      id="page4"
      minHeight="100vh"
      width="100vw"
      position="relative"
      paddingTop={{ base: "50px", lg: "150px" }}
      paddingInline={{ base: "20px", sm: "30px", md: "80px", lg: "150px" }}
      fontSize="18px"
      color="white"
      flexDirection="column"
    >
      <Text textTransform="uppercase" fontFamily="jost">
        Connect the building's twin to your stakeholders.
      </Text>
      <Flex
        gap="10px"
        flexWrap="wrap"
        fontWeight="320"
        fontSize={{ base: "8.5vw", sm: "6vw", md: "4vw" }}
        lineHeight={{ base: "8vw", md: "4.5vw" }}
        marginTop="30px"
        className="animatedTextt"
      >
        <span>Users</span> <span>connect</span> <span>directly</span>{" "}
        <span>to</span> <span>the</span> <span>DTT®</span> <span>without</span>{" "}
        <span>intermediaries</span>. <span>As</span> <span>stakeholders</span>,{" "}
        <span>they</span> <span>can</span> <span>upload</span> <span>and</span>{" "}
        <span>verify</span> <span>information</span> <span>that</span>{" "}
        <span>enriches</span> <span>the</span> <span>Digital</span>{" "}
        <span>Twin</span> <span>Token</span>. <span>Their</span>{" "}
        <span>ability</span> <span>to</span> <span>access</span>{" "}
        <span>validated</span> <span>data</span> <span>and</span>{" "}
        <span>perform</span> <span>tasks</span> <span>depends</span>{" "}
        <span>on</span> <span>their</span> <span>specific</span>{" "}
        <span>roles</span>.
      </Flex>
    </Flex>
  );
};

export default Page4;
