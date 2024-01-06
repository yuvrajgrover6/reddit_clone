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
const Textpost = () => {
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
      <span className="font-bold text-lg my-2">I Feel stuck in India.</span>
      <span className="text-[#2b3d42] text-sm">
        Moving abroad (especially to the USA) has been a lifelong goal of mine.
        A little over a year ago, I've had multiple relocation opportunities
        taken away from in the form of headcount freezes, offer letter
        redactions, etc. - this caused me a great deal of mental health decline.
        I feel stuck in India. I am 26 now and I feel like I am "aging out". I
        want to find a job with relocation support (anywhere US, EU, UK), but
        the market has been really bad and lesser companies are hiring
        internationally. I feel like had I gotten the opportunities just a year
        or so earlier, I would have been there by now and this causes me a great
        deal of FOMO. Now I want to know how can I best navigate the situation;
        make the best of my time in India, and prepare and do everything that I
        can to make a move as early as can be feasible.
      </span>
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

export default Textpost;
