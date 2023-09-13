import { useState } from "react"
import { genres } from "../assets/consts"
import SongCard from "../components/SongCard"
import { useGetTopChartsQuery } from '../redux/services/shazamCore'
import { Track } from "../../types"
import Loading from "../components/Loading"
import Error from "../components/Error"

import { useSelector } from "react-redux"

type Props = {}

function Discover({ }: Props) {

    // const dispatch = useDispatch()

    const [genre, setGenre] = useState("REGGAE_DANCE_HALL")

    const { data, error, isFetching } = useGetTopChartsQuery(genre)

    const { activeSong, isPlaying, isActive } = useSelector((state: any) => state.player || {})


    if (isFetching) {
        return <Loading title="loading songs" />
    }

    if (error) {
        return <Error title="Sorry, we're having issues loading content right now" />
    }

    return (
        <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-center mt-4 mb-10 p-6" >
                <h2 className="uppercase text-lightest-blue font-bold text-xl">Discover {genre.replace("_", " ")}</h2>
                <select onChange={(e) => { setGenre(e.target.value) }} value={genre} className="bg-black text-lightest-blue p3 text-md rounded-lg gutline-none mt-0 md:mt-5 py-2 px-6 relative">
                    {genres.map((genre) => (
                        <option key={genre.value} value={genre.value}>{genre.title}</option>
                    ))}
                </select>
            </div >

            <div className=" flex flex-wrap justify-start md:justify-center gap-8">
                {data?.tracks.map((track: Track, i: string) => (
                    <SongCard key={track.key} index={i} track={track} isPlaying={isPlaying} activeSong={activeSong} data={data} isActive={isActive} />
                ))
                }
            </div>

        </div >
    )
}

export default Discover