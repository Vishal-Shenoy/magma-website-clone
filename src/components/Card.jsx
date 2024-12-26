import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Card = () => {
  return (
    <Flex
      flexDirection="column"
      height="600px"
      width="500px"
      marginRight="20px"
    >
      <Flex
        width="100%"
        height="45%"
        background="blue"
        borderRadius="20px"
        overflow="hidden"
      >
        <img
          src="https://thisismagma.com/wp-content/uploads/2023/04/magma.wp2.cubdev.com-home-1-1.5x.jpg"
          alt=""
          className="page10CardImg"
        />
      </Flex>
      <Flex flexDirection="column" paddingInline="20px" marginTop="20px">
        <Text fontFamily="jost" fontSize="30px">
          Owner
        </Text>
        <ul>
          <li>Improve asset liquidity</li>
          <li>Consolidate all the documentation in one place</li>
          <li>Lower operating costs</li>
          <li>Have a 360 and intuitive reproduction of your Building</li>
          <li>Connect to Web3 with a wallet</li>
          <li>Create digital value for the building (digital assets)</li>
          <li>Access governance of Magma</li>
        </ul>
      </Flex>
    </Flex>
  );
};

export default Card;
