import { Link } from "react-router-dom";
import { Images, Track } from "../../types";
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
};

function SongCard({ track, activeSong, isPlaying, data, index }: Props) {
    const dispatch = useDispatch()

    const { title, images, } = track;

    const handlePauseClick = () => {
        dispatch(playPause(false))
        console.log('paused')
    };

    const handlePlayClick = () => {
        dispatch(setActiveSong({ track, data, index }))
        dispatch(playPause(true))
        console.log('Play')

    };
    return (
        <div className="flex flex-col w-[250px] text-left p-4 h-auto cursor-pointer bg-opacity-80 bg-white/5 backdrop-blur-sm text-lightest-blue rounded-lg text-sm">
            <div className="relative w-full h-56 group">
                <img
                    src={images.coverart}
                    className="object-contain w-full mb-4"
                    width="100%"
                    height="auto"
                    alt="song-image"
                />
                <div
                    className={`absolute group-hover:flex inset-0 justify-center items-center bg-black bg-opacity-50 ${activeSong?.title === track.title
                        ? "flex bg-black bg-opacity-70"
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
                        isActive={false}
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
