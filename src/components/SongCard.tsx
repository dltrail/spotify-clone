import { Link } from "react-router-dom"
import { Images, Track } from "../../types"

type Props = {
    track: Track
}

function SongCard({ track }: Props) {
    const { title, key, artists, images, share } = track
    return (
        <div className="flex flex-col w-[220px] text-left p-4 h-auto cursor-pointer bg-opacity-80 bg-white/5 backdrop-blur-sm text-lightest-blue rounded-lg text-sm">
            <img src={images.coverart} className="object-contain w-full mb-4" width="100%" height="auto" />
            <Link className="text-wrap capitalize font-bold text-sm truncate" to={`/songs/${track?.key}`}>{title}</Link>
            <Link className="capitalize font-extralight text-xs" to={track.artists ? `/artists/${track?.artists[0]?.adamid}` : '/top-artists'}>{title}</Link>
        </div >
    )
}

export default SongCard