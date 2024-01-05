"use client";
import React from "react";
import Image from "next/image";
import {
  ArrowBackIos,
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
const HorizontalImageView = () => {
  const images = [
    "https://picsum.photos/300/200",
    "https://picsum.photos/300/201",
    "https://picsum.photos/300/202",
    "https://picsum.photos/300/203",
    "https://picsum.photos/300/204",
    "https://picsum.photos/300/205",
    "https://picsum.photos/300/206",
    "https://picsum.photos/300/207",
    "https://picsum.photos/300/208",
    "https://picsum.photos/300/209",
    "https://picsum.photos/300/210",
    "https://picsum.photos/300/211",
    "https://picsum.photos/300/212",
    "https://picsum.photos/300/213",
    "https://picsum.photos/300/214",
  ];

  const scrollSpeed = 500;

  const scrollContainerRef = React.useRef<HTMLDivElement | null>(null);
  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const maxScroll = container.scrollWidth - container.clientWidth;
      const newScrollLeft = container.scrollLeft + scrollSpeed;
      // hide scrollRight if maxScroll is reached
      if (newScrollLeft >= maxScroll) {
        const scrollItem = document.querySelector(".scrollRight");
        scrollItem?.classList.add("hidden");
      }

      const scrollItem = document.querySelector(".scrollLeft");
      scrollItem?.classList.remove("hidden");
      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const maxScroll = container.scrollWidth - container.clientWidth;
      const newScrollLeft = container.scrollLeft - scrollSpeed;
      if (newScrollLeft <= 0) {
        const scrollItem = document.querySelector(".scrollLeft");
        scrollItem?.classList.add("hidden");
      }
      const scrollItem = document.querySelector(".scrollRight");
      scrollItem?.classList.remove("hidden");
      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <div
        className="flex overflow-x-scroll scrollbar-hide"
        ref={scrollContainerRef}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-cover min-w-[280px] h-[220px] rounded-xl mr-4 px-2 py-2 flex flex-col justify-end transition-all duration-500 scroll-smooth"
            style={{
              backgroundImage: `url(${image})`,
              scrollBehavior: "smooth",
            }}
          >
            <span className="text-white font-bold text-2xl line-clamp-1">
              India win the match by 10 wickets
            </span>
            <span className="text-white line-clamp-1 text-sm mb-2">
              Team India and South Africa are playing the first match of the
            </span>
            <div className="flex items-center">
              <div className="w-50 h-50 overflow-hidden rounded-full">
                <Image
                  src={"https://picsum.photos/100/100"}
                  alt=""
                  width={26}
                  height={26}
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <span className="text-white font-bold text-xs ml-2">
                r/IndiaCricket
              </span>
              <span className="text-zinc-300 text-xs">&nbsp;and more</span>
            </div>
          </div>
        ))}
      </div>
      <div
        className="scrollRight cursor-pointer absolute right-3 top-24 bg-black rounded-full bg-opacity-50 w-8 h-8 align-middle items-center justify-center px-1.5 py-0.5"
        onClick={scrollRight}
      >
        <ArrowForwardIosOutlined
          style={{ color: "white" }}
          className="w-5 h-5 self-center"
        />
      </div>
      <div
        className="hidden scrollLeft cursor-pointer absolute left-3 top-24 bg-black rounded-full bg-opacity-50 w-8 h-8 align-middle items-center justify-center px-1.5 py-0.5"
        onClick={scrollLeft}
      >
        <ArrowBackIosOutlined
          style={{ color: "white" }}
          className="w-5 h-5 self-center"
        />
      </div>
    </div>
  );
};

export default HorizontalImageView;
