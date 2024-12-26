import React, { useEffect, useRef, useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { colors } from "../constants/colors";
import handleAllFrames from "../frames";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useLocoScroll from "../hooks/useLocoScroll";

const Page7 = () => {
  const frames = {
    currentIndex: 0,
    minFrames: 1,
    maxFrames: 136,
  };
  let imageLoaded = 0;
  let dummyImages = [];
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);

  // Preload images
  useEffect(() => {
    const preloadImages = () => {
      for (let i = frames.minFrames; i <= frames.maxFrames; i++) {
        const img = new Image();
        img.src = `https://thisismagma.com/assets/home/lore/seq/${i}.webp?2`; // Update this path based on your folder structure
        dummyImages.push(img);
        img.onload = () => {
          imageLoaded++;
          if (imageLoaded === frames.maxFrames + 1) {
            loadImages(frames.minFrames);
          }
        };
        img.onerror = () => {
          console.error(`Failed to load image: ${img.src}`);
        };
      }
      console.log(dummyImages);
    };

    preloadImages();
  }, []);

  // Load and render images to the canvas
  const loadImages = (index) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = colors.primaryBackground;
    context.fill();
    if (index <= frames.maxFrames && index >= frames.minFrames) {
      const img = dummyImages[index];
      if (!img) {
        console.error(`Image at index ${index} is not loaded.`);
        return;
      }
      const scaleX = canvas.width / img.width;
      const scaleY = canvas.height / img.height;
      const scale = Math.max(scaleX, scaleY);
      const newWidth = img.width * scale;
      const newHeight = img.height * scale;
      const offsetX = (canvas.width - newWidth) / 2;
      const offsetY = (canvas.height - newHeight) / 2;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
    }
  };

  // Initialize GSAP animation
  useGSAP(() => {
    const startAnimation = () => {
      gsap.to(frames, {
        currentIndex: frames.maxFrames,
        scrollTrigger: {
          trigger: "#Page7",
          scroller: "#main",
          start: "top 0%",
          pin: true,
          end: "top -200%",
          scrub: 2,

          onEnter: () => console.log("Animation started"),
        },
        onUpdate: function () {
          loadImages(Math.floor(frames.currentIndex));
        },
      });
    };

    startAnimation();

    gsap.to("#outerCircle", {
      height: "35vw",
      width: "35vw",
      scrollTrigger: {
        trigger: "#Page7",
        scroller: "#main",
        start: "top 0%",
        end: "top -200%",
        scrub: 2,
      },
    });

    gsap.to("#innerCircle", {
      height: "25vw",
      width: "25vw",
      scrollTrigger: {
        trigger: "#Page7",
        scroller: "#main",
        start: "top 0%",
        end: "top -200%",
        scrub: 2,
      },
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <Flex
      id="Page7"
      minHeight="100vh"
      width="100vw"
      position="relative"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
    >
      <div id="outerCircle">
        <div id="innerCircle"></div>
      </div>
      <canvas
        ref={(node) => (canvasRef.current = node)}
        id="page7Canvas"
      ></canvas>
    </Flex>
  );
};

export default Page7;
