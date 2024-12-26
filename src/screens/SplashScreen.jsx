import React, { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { colors } from "../constants/colors";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const SplashScreen = () => {
  const [percentile, setPercentile] = useState(0);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".splashScreenText", {
      duration: 0.7,
      rotate: "30deg",
      stagger: 0.03,
      y: "100%",
      opacity: 0,
      onComplete: () => console.log("complete"),
    }).add(() => animateNumber(0, 100, 1000), "+=2");
    tl.to(".openingSplashScreen", {
      height: "0%",
      duration: 0.5,
      delay: 2,
    }).to(".closingSplashScreen ", {
      height: "0%",
      duration: 0.3,
    });
  }, []);

  const animateNumber = (start, end, duration) => {
    const startTime = performance.now();
    const range = end - start;
    const step = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const value = Math.round(start + progress * range);
      setPercentile(value);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };
  return (
    <Flex position="relative">
      <Flex
        height="100vh"
        width="100vw"
        bg={colors.white}
        position="fixed"
        bottom={0}
        zIndex={9}
        className="closingSplashScreen"
      ></Flex>
      <Flex
        height="100vh"
        width="100vw"
        bg={colors.primaryBackground}
        position="fixed"
        bottom={0}
        zIndex={10}
        className="openingSplashScreen"
      >
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          height="fit-content"
          justifyContent="space-between"
          width="100%"
          marginTop="40vh"
          marginInline="10vw"
          fontFamily="jost"
          fontSize={{ base: "15vw", sm: "10vw", md: "10vw", lg: "6vw" }}
          lineHeight={{ base: "16.5vw", sm: "11vw", md: "11vw", lg: "7vw" }}
        >
          <Flex flexDirection="column" color={colors.white} gap="10px">
            <Flex overflow="hidden" gap="10px">
              <Text className="splashScreenText">Experience</Text>
              <Text
                className="splashScreenText"
                display={{ base: "none", md: "block" }}
              >
                Real
              </Text>
            </Flex>
            <Flex overflow="hidden" gap="10px">
              <Text
                className="splashScreenText"
                display={{ base: "block", md: "none" }}
              >
                Real
              </Text>
              <Text className="splashScreenText">Estate</Text>
              <Text
                className="splashScreenText"
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
              <Text className="splashScreenText">Agility</Text>
            </Flex>
          </Flex>
          <Flex>
            <Flex
              marginLeft={{ base: "auto", md: "none" }}
              overflow="hidden"
              color={colors.white}
              fontFamily="jost"
              alignItems="flex-end"
            >
              <Text className="splashScreenText">{percentile}%</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SplashScreen;
