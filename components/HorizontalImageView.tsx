import React from "react";
import Image from "next/image";
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

  return (
    <div className="flex overflow-x-scroll scrollbar-hide">
      {images.map((image, index) => (
        <div
          key={index}
          className="bg-cover min-w-[280px] h-[220px] rounded-xl mr-4 px-2 py-2 flex flex-col justify-end"
          style={{ backgroundImage: `url(${image})` }}
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
  );
};

export default HorizontalImageView;
