import { Track } from "../../types"
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

type Props = {
    handlePause: () => void,
    handlePlay: () => void
    currentIndex: 0,
    isActive: boolean,
    isPlaying: boolean,
    activeSong: {
        title: ''
    },
    genreListId: "",
    track: Track
}

function PlayPause({ isPlaying, activeSong, track, handlePause, handlePlay }: Props) {
    return (
        <div>
            {/* {isPlaying && activeSong.title === track.title ? (
                <FaPauseCircle size={35} className="bg-gray-500" onClick={handlePause} />) :
                (
                    <FaPlayCircle size={35} className="text-gray-500" onClick={handlePlay} />
                )
            } */}

            <FaPauseCircle size={35} className="bg-gray-500" onClick={handlePause} />

            <FaPlayCircle size={35} className="text-gray-500" onClick={handlePlay} />

        </div>
    )
}

export default PlayPause