import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";
export default async function Home() {
  return (
    <main className="h-full w-full">
      <Navbar />
      <div className="flex flex-row justify-center gap-4">
        <SideBar />
        <div className="w-3/5 h-full bg-gray-200 my-4">
          <div className="w-full h-70 bg-orange-200">Content</div>
        </div>
      </div>
    </main>
  );
}
