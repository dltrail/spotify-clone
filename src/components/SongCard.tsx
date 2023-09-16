import { Link } from "react-router-dom";
import { Track } from "../../types";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useDispatch } from "react-redux";

type Props = {
    track: Track;
    isPlaying: boolean
    currentIndex?: number,
    activeSong: { title: '' },
    genreListId?: ""
    index: string
    data: {}
    isActive: boolean
};

function SongCard({ track, isPlaying, isActive, data, index, activeSong }: Props) {
    console.log(isPlaying)
    const dispatch = useDispatch()

    const { title, images, } = track;
    const handlePlayClick = () => {

        dispatch(playPause(true))
        dispatch(setActiveSong({ track, data, index }))
    };
    const handlePauseClick = () => {
        dispatch(playPause(false))
    };


    return (
        <div className="flex flex-col w-[250px] text-left p-4 h-auto cursor-pointer bg-opacity-80 bg-white/5 backdrop-blur-sm text-lightest-blue rounded-lg text-sm group">
            <div className="relative w-full h-56">
                <img
                    src={images.coverart}
                    className="object-contain w-full mb-4"
                    width="100%"
                    height="auto"
                    alt="song-image"
                />
                <div
                    className={`absolute group-hover:flex -bottom-8 right-0 justify-center items-center bg-opacity-50 ${activeSong?.title === track.title
                        ? "flex"
                        : "hidden"
                        }`}
                >
                    <PlayPause
                        handlePause={handlePauseClick}
                        handlePlay={handlePlayClick}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        track={track}
                        currentIndex={0}
                        isActive={isActive}
                        genreListId={""} />
                </div>
            </div>
            <Link
                className="text-wrap capitalize font-bold text-sm truncate"
                to={`/songs/${track?.key}`}
            >
                {title}
            </Link>
            <Link
                className="capitalize font-extralight text-xs"
                to={
                    track.artists
                        ? `/artists/${track?.artists[0]?.adamid}`
                        : "/top-artists"
                }
            >
                {title}
            </Link>
        </div>
    );
}

export default SongCard;
