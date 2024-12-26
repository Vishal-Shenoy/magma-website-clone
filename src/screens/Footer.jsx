import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Flex
      width="100vw"
      minHeight="fit-content"
      background="#0f0f17"
      flexDirection={"column"}
    >
      <Flex
        color="#ffffff"
        flexDirection="column"
        fontFamily="jost"
        paddingTop={{ base: "100px" }}
        paddingLeft={{ base: "30px", sm: "50px", md: "80px", lg: "130px" }}
        lineHeight={{ base: "14vw", sm: "10vw", md: "6vw" }}
        fontSize={{ base: "14vw", sm: "10vw", md: "6vw" }}
      >
        <Text>Become an</Text>
        <Text>early adopter</Text>

        <Flex marginTop="50px">
          <button className="bookDemoFooter">
            <span className="hoverEffectTextFooter">Book a Demo</span>
            Book a Demo
            <span className="hoverEffectFooter"></span>
          </button>
        </Flex>
      </Flex>

      <Flex
        width="100%"
        height={{ base: "70px", md: "100px" }}
        marginTop="100px"
        border="1px rgba(255,255,255,.1) solid"
        color="white"
        justifyContent="space-between"
        paddingInline={{ base: "20px", md: "130px" }}
        alignItems="center"
        fontSize={{ base: "20px", md: "40px" }}
        position="relative"
        className="footerHover"
      >
        <span></span>
        <Text>𝕏</Text>
        <Text>&#x1F865;</Text>
      </Flex>
      <Flex
        width="100%"
        height={{ base: "70px", md: "100px" }}
        border="1px rgba(255,255,255,.1) solid"
        color="white"
        justifyContent="space-between"
        paddingInline={{ base: "20px", md: "130px" }}
        alignItems="center"
        fontSize={{ base: "20px", md: "40px" }}
        fontFamily="jost"
        className="footerHover"
      >
        {" "}
        <span></span>
        <Text>LinkedIn</Text>
        <Text>&#x1F865;</Text>
      </Flex>
      <Flex
        width="100%"
        height={{ base: "70px", md: "100px" }}
        border="1px rgba(255,255,255,.1) solid"
        color="white"
        justifyContent="space-between"
        paddingInline={{ base: "20px", md: "130px" }}
        alignItems="center"
        fontFamily="jost"
        fontSize={{ base: "20px", md: "40px" }}
        className="footerHover"
      >
        {" "}
        <span></span>
        <Text>Instagram</Text>
        <Text>&#x1F865;</Text>
      </Flex>
      <Flex
        width="100%"
        height={{ base: "70px", md: "100px" }}
        border="1px rgba(255,255,255,.1) solid"
        color="white"
        justifyContent="space-between"
        paddingInline={{ base: "20px", md: "130px" }}
        alignItems="center"
        fontFamily="jost"
        fontSize={{ base: "20px", md: "40px" }}
        className="footerHover"
      >
        {" "}
        <span></span>
        <Text>Telegram</Text>
        <Text>&#x1F865;</Text>
      </Flex>
      <Flex
        width="100%"
        height={{ base: "70px", md: "100px" }}
        border="1px rgba(255,255,255,.1) solid"
        color="white"
        justifyContent="space-between"
        paddingInline={{ base: "20px", md: "130px" }}
        alignItems="center"
        fontFamily="jost"
        fontSize={{ base: "20px", md: "40px" }}
        className="footerHover"
      >
        {" "}
        <span></span>
        <Text>Youtube</Text>
        <Text>&#x1F865;</Text>
      </Flex>

      <Flex
        color="#ffffff"
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
        fontFamily="jost"
        marginTop={{ base: "30px", sm: "50px", md: "70px" }}
        paddingInline={{ base: "20px", md: "130px" }}
      >
        <Flex textTransform="uppercase">
          <Flex flexDirection="column" gap="8px">
            <Text cursor="pointer" className="footerTextUnderline">
              Mission
              <span></span>
            </Text>
            <Text className="footerTextUnderline">
              Product
              <span></span>
            </Text>
            <Text className="footerTextUnderline">
              Blog
              <span></span>
            </Text>
            <Text className="footerTextUnderline">
              FAQ
              <span></span>
            </Text>
          </Flex>
          <Flex
            marginLeft={{ base: "auto", md: "100px" }}
            flexDirection="column"
            gap="8px"
          >
            <Text cursor="pointer" className="footerTextUnderline">
              Contact
              <span></span>
            </Text>
            <Text className="footerTextUnderline">
              Privacy Policy
              <span></span>
            </Text>
            <Text className="footerTextUnderline">
              Terms
              <span></span>
            </Text>
          </Flex>
        </Flex>
        <Flex flexDirection="column" marginTop={{ base: "30px", md: "0px" }}>
          <Text>Subscribe</Text>
          <input type="text" placeholder="E-mail" id="footerInput" />
        </Flex>
      </Flex>
      <Text
        marginTop="30px"
        marginBottom="20px"
        color="#ffffff"
        fontSize="12px"
        paddingInline={{ base: "20px", md: "130px" }}
      >
        © 2024 by MAGMA
      </Text>
    </Flex>
  );
};

export default Footer;
