import HorizontalImageView from "@/components/HorizontalImageView";
import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";
export default async function Home() {
  return (
    <main className="max-h-screen overflow-hidden">
      <Navbar />
      <div className="flex flex-row justify-center gap-4">
        <SideBar />
        <div className="w-3/5 h-full my-4">
          <HorizontalImageView />
        </div>
      </div>
    </main>
  );
}
