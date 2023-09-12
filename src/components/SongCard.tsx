import { Images, Track } from "../../types"

type Props = {
    track: Track
}

function SongCard({ track }: Props) {
    const { title, key, artists, images, share } = track
    return (
        <div className="flex flex-col items-center w-[220px] p-4 h-auto cursor-pointer bg-opacity-80 bg-white/5 backdrop-blur-sm text-lightest-blue rounded-lg text-sm">
            <img src={images.coverart} className="object-contain w-full mb-4" width="100%" height="auto" />
            <p className="text-wrap capitalize font-bold text-sm">{title}</p>
            {track.artists.map((artist) => (
                <span key={artist.adamid} className="capitalize font-extralight text-xs">{artist.alias.replace('-', " ")}</span>
            ))
            }
        </div >
    )
}

export default SongCard