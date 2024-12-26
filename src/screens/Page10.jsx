import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "../App.css";

// import required modules
import { Pagination } from "swiper/modules";
import Card from "../components/Card";
const Page10 = () => {
  return (
    <Flex
      height="110vh"
      background="#ffffff"
      width="100vw"
      paddingTop="100px"
      flexDirection="column"
    >
      <Text
        fontSize={{ base: "12vw", md: "8vw", lg: "6vw" }}
        marginLeft="100px"
        fontFamily="jost"
      >
        For All Stakeholders
      </Text>
      <Flex>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={false}
          centeredSlides={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </Flex>
    </Flex>
  );
};

export default Page10;
