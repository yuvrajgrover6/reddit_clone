"use client";
import HorizontalImageView from "@/components/HorizontalImageView";
import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import Textpost from "@/components/Textpost";
import MediaPost from "@/components/MediaPost";
export default async function Home() {
  return (
    <main className="max-h-screen">
      <Navbar />
      <div className="flex flex-row justify-center gap-4">
        <SideBar />
        <div className="w-3/5 h-full my-4">
          <HorizontalImageView />
          <Textpost />
          {/* <MediaPost /> */}
          <Textpost />
          <Textpost />
          <Textpost />
        </div>
      </div>
    </main>
  );
}
