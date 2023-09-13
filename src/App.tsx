import { useSelector } from "react-redux";
import Discover from "./pages/Discover"
import MusicPlayer from "./components/MusicPlayer";

function App() {
  const { activeSong } = useSelector((state: any) => state.player);

  return (
    <main className="text-center max-w-7xl mx-auto">
      <Discover />
      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </main>
  )
}

export default App
