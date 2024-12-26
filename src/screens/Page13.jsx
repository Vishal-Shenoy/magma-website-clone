import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { colors } from "../constants/colors";

const Page13 = () => {
  return (
    <Flex
      flexDirection="column"
      height={{ base: "80vh", md: "100vh" }}
      width="100vw"
      backgroundColor={colors.primaryBackground}
      overflow="hidden"
    >
      <Flex
        paddingInline={{ base: "20px", md: "30px", lg: "250px" }}
        paddingTop={{ base: "100px" }}
      >
        <Flex
          marginLeft={{ base: "unset", lg: "auto" }}
          width={{ base: "100%", lg: "50%" }}
          height="fit-content"
          flexDirection="column"
        >
          <Text
            fontFamily="jost"
            color="white"
            fontSize={{ base: "16vw", md: "10vw", lg: "5.5vw" }}
          >
            Featured In
          </Text>
          <Text
            fontFamily="jost"
            color="white"
            marginTop="20px"
            fontSize="18px"
          >
            Thrilled to have been featured in several prominent media outlets
            and leading professionals across the world’s best real estate and
            web3 institutions.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Page13;
