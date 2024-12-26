import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Page12 = () => {
  useGSAP(() => {
    gsap.from("#page12Text", {
      rotate: "30deg",
      y: "100%",
      opacity: 0,
      scrollTrigger: {
        trigger: "#page12Text",
        scroller: "#main",
        scrub: 2,
        start: "top 50%",
        end: "top 40%",
      },
    });
  }, []);
  return (
    <Flex
      flexDirection="column"
      minHeight="150vh"
      width="100vw"
      paddingTop="50px"
      paddingInline={{ base: "30px", sm: "80px", md: "100px" }}
      paddingBottom={{ base: "50px", md: "0" }}
      background="#ffffff"
    >
      <Flex overflow="hidden">
        <Text
          id="page12Text"
          fontFamily="jost"
          fontSize={{ base: "13vw", sm: "10vw", md: "8vw", lg: "6vw" }}
          marginBottom="50px"
        >
          Recent blog
        </Text>
      </Flex>

      <Flex
        gap="60px"
        marginTop="30px"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          height="200px"
          width={{ base: "100%", md: "45%" }}
          overflow="hidden"
          borderRadius="20px"
        >
          <img
            src="https://thisismagma.com/wp-content/uploads/2024/12/thisismagma.com-magma-token-mgtn-magma-token-mgtn.jpeg"
            alt=""
            className="page12Img"
          />
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          fontFamily="jost"
          width={{ base: "100%", md: "50%" }}
        >
          <Text fontSize="20px" opacity="0.5" fontFamily="jost">
            Announcements / Dec 13 2024
          </Text>
          <Text marginTop="20px" fontFamily="jost" fontSize="20px">
            Wrapping Up a Milestone: $MGTN's First Fundraising Round
          </Text>
        </Flex>
      </Flex>
      <Flex
        gap="60px"
        marginTop="30px"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex
          height="200px"
          width={{ base: "100%", md: "45%" }}
          overflow="hidden"
          borderRadius="20px"
        >
          <img
            src="https://thisismagma.com/wp-content/uploads/2024/12/thisismagma.com-2024-12-10-18.03.29-2024-12-10-18.03.29.png"
            alt=""
            className="page12Img"
          />
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          fontFamily="jost"
          width={{ base: "100%", md: "50%" }}
        >
          <Text fontSize="20px" opacity="0.5" fontFamily="jost">
            Announcements / Dec 10 2024
          </Text>
          <Text marginTop="20px" fontFamily="jost" fontSize="20px">
            Magma and Groupe Colombus : a strategc alliancs to digitize the real
            estate industry
          </Text>
        </Flex>
      </Flex>
      <Flex
        gap="60px"
        marginTop="30px"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex
          height="200px"
          width={{ base: "100%", md: "45%" }}
          overflow="hidden"
          borderRadius="20px"
          flexDirection={{ base: "column", md: "row" }}
        >
          <img
            src="https://thisismagma.com/wp-content/uploads/2024/12/thisismagma.com-magma-launches-in-the-uae-introducing-the-future-of-real-estate-magma-logo.png"
            alt=""
            className="page12Img"
          />
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          fontFamily="jost"
          width={{ base: "100%", md: "50%" }}
        >
          <Text fontSize="20px" opacity="0.5" fontFamily="jost">
            Announcements / Dec 10 2024
          </Text>
          <Text marginTop="20px" fontFamily="jost" fontSize="20px">
            Magma Launches in the UAE: Introducing the future of Real Estate
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Page12;
