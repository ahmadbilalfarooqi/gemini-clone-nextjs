import GeminiBody from "@/components/GeminiBody";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <div className="flex contain">
      <SideBar />
      <GeminiBody />
    </div>
  );
}
