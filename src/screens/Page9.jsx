import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { colors } from "../constants/colors";
const Page9 = () => {
  return (
    <Flex
      minHeight="100vh"
      paddingTop="100px"
      paddingBottom="100px"
      flexDirection={"column"}
      background={colors.primaryBackground}
      paddingInline={{ base: "30px", lg: "100px" }}
    >
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        gap="50px"
        justifyContent="space-between"
      >
        <Text
          id="page9Heading"
          fontFamily="jost"
          color="#ffffff"
          fontSize={{ base: "14vw", sm: "12vw", md: "10vw", lg: "5vw" }}
        >
          What is <br /> Magma?
        </Text>
        <Flex
          borderRadius="20px"
          overflow="hidden"
          height="90%"
          width={{ base: "1005", md: "60%" }}
        >
          <img
            className="page9Img"
            src="https://thisismagma.com/wp-content/uploads/2023/04/magma.wp2.cubdev.com-home-1.jpeg"
            alt=""
          />
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        width={{ base: "100%", md: "60%" }}
        ml="auto"
        marginTop="70px"
        gap="30px"
      >
        <Text
          fontFamily="jost"
          color="#ffffff"
          fontSize={{ base: "5vw", md: "25px" }}
        >
          Web3 platform
        </Text>
        <Text
          fontFamily="jost"
          color="#ffffff"
          fontSize={{ base: "5vw", md: "25px" }}
          opacity=".5"
        >
          Magma is a Web3 platform for all real estate stakeholders, which
          provides users with the ability to manage interactions between
          physical and digital assets through unique, and collectively
          generated, 3D representations of their buildings.
        </Text>
        <Text
          fontFamily="jost"
          color="#ffffff"
          fontSize={{ base: "5vw", md: "25px" }}
        >
          The Digital Twin Token: The building’s unique digital copy
        </Text>
        <Text
          fontFamily="jost"
          color="#ffffff"
          fontSize={{ base: "5vw", md: "25px" }}
          opacity=".5"
        >
          Magma uses blockchain technology to record essential data, which
          enables transparent, traceable, and immutable streams of information
          to be readily accessible to its users. Magma smart contracts are built
          with this blockchain data to expedite tasks like requests for
          proposals, lease agreements, and services arrangements.
        </Text>
        <Text
          fontFamily="jost"
          color="#ffffff"
          fontSize={{ base: "5vw", md: "25px" }}
        >
          An Index of digitization
        </Text>
        <Text
          fontFamily="jost"
          color="#ffffff"
          fontSize={{ base: "5vw", md: "25px" }}
          opacity=".5"
        >
          The Magma Index provides valuable insight for decision-making
          regarding data-sharing, service-creating, and
          operational/environmental expectations.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Page9;
