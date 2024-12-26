import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import video from "../assets/1.mp4";
import image from "../assets/image.png";
import "../App.css";
import { colors } from "../constants/colors";
import "../../node_modules/locomotive-scroll/dist/locomotive-scroll.css";
import MenuIcon from "../assets/horizontal-lines(2).png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Page1 = () => {
  useGSAP(() => {
    gsap.from(".homeScreenText", {
      delay: 5,
      duration: 0.7,
      rotate: "30deg",
      stagger: 0.03,
      y: "100%",
      opacity: 0,
    });
  }, []);
  return (
    <Flex
      minHeight="100vh"
      width="100vw"
      position="relative"
      data-scroll
      data-scroll-speed={-5}
      flexDirection="column"
    >
      {/* navbar */}
      <Flex
        width="100%"
        paddingInline={{ base: "60px" }}
        paddingTop="10px"
        alignItems="center"
        height="100px"
      >
        <img src={image} alt="" className="logo" />
        <Flex marginLeft="auto">
          <Flex display={{ base: "none", md: "flex" }}>
            <button className="bookDemo">
              <span className="hoverEffectText">Book a Demo</span>
              Book a Demo
              <span className="hoverEffect"></span>
            </button>
          </Flex>
          <Flex
            width="70px"
            height="40px"
            border="1px solid white"
            borderRadius="20px"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
          >
            <img src={MenuIcon} alt="" className="menuIcon" />
          </Flex>
        </Flex>
      </Flex>
      {/* navbar-ends */}

      {/* page1-body */}

      <Flex
        flexDirection={{ base: "column" }}
        height="fit-content"
        width="fit-content"
        marginTop={{ base: "10vh", md: "25vh" }}
        marginInline="10vw"
      >
        <Flex
          flexDirection="column"
          color={colors.white}
          gap="10px"
          fontFamily="jost"
          fontSize={{ base: "15vw", sm: "10vw", md: "10vw", lg: "6vw" }}
          lineHeight={{ base: "16.5vw", sm: "11vw", md: "11vw", lg: "7vw" }}
        >
          <Flex overflow="hidden" gap="10px">
            <Text className="homeScreenText">Experience</Text>
            <Text
              className="homeScreenText"
              display={{ base: "none", md: "block" }}
            >
              Real
            </Text>
          </Flex>
          <Flex overflow="hidden" gap="10px">
            <Text
              className="homeScreenText"
              display={{ base: "block", md: "none" }}
            >
              Real
            </Text>
            <Text className="homeScreenText">Estate</Text>
            <Text
              className="homeScreenText"
              display={{ base: "none", md: "block" }}
            >
              Agility
            </Text>
          </Flex>
          <Flex
            overflow="hidden"
            gap="10px"
            display={{ base: "block", md: "none" }}
          >
            <Text className="homeScreenText">Agility</Text>
          </Flex>
        </Flex>
        <Flex>
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            overflow="hidden"
            color={colors.white}
            fontFamily="jost"
            marginTop="3vh"
          >
            <Text className="homeScreenText">
              Create a Digital Twin Token (DTT®) of your <br /> existing
              building and release the potential of <br /> Web3.
            </Text>

            <Flex
              marginLeft={{ base: "0", md: "5vw" }}
              marginTop={{ base: "5vh", md: "0" }}
            >
              <button className="learnMore">
                <span className="learnMoreHoverEffect">LEARN MORE</span>
                Learn More
                <span className="backDrop"></span>
              </button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      {/* Page2-body */}

      <video src={video} autoPlay loop muted className="page1Video" />
    </Flex>
  );
};

export default Page1;
