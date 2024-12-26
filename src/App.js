import { Box, Heading, Text, VStack, Container, Flex } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplashScreen from './screens/SplashScreen';
import LocomotiveScroll from 'locomotive-scroll';
import '../node_modules/locomotive-scroll/dist/locomotive-scroll.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Page1 from './screens/Page1';
import Page2 from './screens/Page2';
import useLocoScroll from './hooks/useLocoScroll';
import Page3 from './screens/Page3';
import Page4 from './screens/Page4';
import Page5 from './screens/Page5';
import Page6 from './screens/Page6';
import Page7 from './screens/Page7';
import Page8 from './screens/Page8';
import Footer from './screens/Footer';
import Page13 from './screens/Page13';
import Page12 from './screens/Page12';
import Page9 from './screens/Page9';
import Page10 from './screens/Page10';
function App() {
  const scrollContainerRef = useRef(null);

  return (
    <>
      <SplashScreen />
      <div id='main' data-scroll-container>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8 />
        <Page9 />
        <Flex display={{ base: "none", lg: "flex" }}>
          <Page10 />
        </Flex>
        <Page12 />
        <Page13 />
        <Footer />
      </div>
    </>
  );
}

export default App;
