import React from "react";
import IconButton from "./IconButton";
import {
  ChatBubbleOutlineOutlined,
  DownloadOutlined,
  IosShareOutlined,
  MoreHorizOutlined,
  UploadOutlined,
} from "@mui/icons-material";
import PrimaryButton from "./PrimaryButton";
import Image from "next/image";
import ReactPlayer from "react-player/youtube";
const MediaPost = () => {
  const isVideo: boolean = true;
  return (
    <div className="flex flex-col max-w-3xl my-2 hover:bg-[#f9fafa] px-2.5 py-1 rounded-xl">
      <div className="flex flex-row justify-between items-center">
        <div className="flex items-center gap-2">
          <div
            className=" w-[26px] h-[26px] rounded-full bg-cover"
            style={{
              backgroundImage: `url(https://picsum.photos/100/100)`,
            }}
          />
          <span className="text-[#3a3d52] text-xs font-semibold">
            r/IndiaCricket
          </span>
          <span className="text-[#3a3d52] text-xs font-light">• 5 hr. ago</span>
        </div>
        <div className="flex">
          <button
            type="button"
            className="bg-blue-800 text-white rounded-2xl px-3 my-1.5 text-xs font-semibold hover:bg-blue-900 transition-all duration-300"
          >
            Join
          </button>
          <IconButton children={<MoreHorizOutlined />} onClick={() => {}} />
        </div>
      </div>
      <span className="font-bold text-lg my-2 line-clamp-1 text-ellipsis max-w-[550px]">
        I Feel stuck in India. I Feel stuck in India. I Feel stuck in India. I
        Feel and i like to explain why
      </span>
      <div className="flex items-center justify-center bg-[#93918e] rounded-lg h-[550px] w-[718px]">
        {isVideo ? (
          <ReactPlayer url={"https://www.youtube.com/watch?v=bTrV5v7GLcQ"} />
        ) : (
          <Image
            src={"/sample.webp"}
            alt={"Picture of the author"}
            width={718}
            height={550}
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
      <div className="flex gap-4">
        <PrimaryButton
          className="w-[80px] h-[32px] flex justify-between items-center my-2 p-0"
          children={
            <div className="flex items-center">
              <UploadOutlined className="w-[20px] m-0 p-0" />
              <span className="font-bold text-xs">586</span>
              <DownloadOutlined className="w-[20px] m-0 p-0" />
            </div>
          }
          isSecondary
          disabled
          onClick={() => {}}
        />
        <PrimaryButton
          className="w-[80px] h-[32px] flex justify-between items-center my-2 p-0"
          children={
            <div className="flex items-center gap-1">
              <ChatBubbleOutlineOutlined className="w-[20px] m-0 p-0 font-thin" />
              <span className="font-bold text-xs">1.4K</span>
            </div>
          }
          isSecondary
          onClick={() => {}}
        />
        <PrimaryButton
          className="w-[80px] h-[32px] flex justify-between items-center my-2 p-0"
          children={
            <div className="flex items-center gap-1">
              <IosShareOutlined className="w-[20px] m-0 p-0 font-thin" />
              <span className="font-bold text-xs">Share</span>
            </div>
          }
          isSecondary
          onClick={() => {}}
        />
      </div>
      <hr />
    </div>
  );
};

export default MediaPost;
