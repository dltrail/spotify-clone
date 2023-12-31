import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
// import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';
import { BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';

type Props = {
  isPlaying: boolean, repeat: boolean, setRepeat: (prev: boolean) => void, shuffle: boolean, setShuffle: (prev: boolean) => void, currentSongs: [], handlePlayPause: () => void, handlePrevSong: () => void, handleNextSong: () => void, isActive: boolean
}

// const Controls = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong }: Props) => (
const Controls = ({ isPlaying, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong }: Props) => (
  <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    {/* <BsArrowRepeat size={20} color={repeat ? 'red' : 'white'} onClick={setRepeat(!repeat)} className="hidden sm:block cursor-pointer" /> */}
    {currentSongs?.length && <MdSkipPrevious size={30} color="#FFF" className="cursor-pointer" onClick={handlePrevSong} />}
    {isPlaying ? (
      <BsFillPauseFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
    ) : (
      <BsFillPlayFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
    )}
    {currentSongs?.length && <MdSkipNext size={30} color="#FFF" className="cursor-pointer" onClick={handleNextSong} />}
    <BsShuffle size={20} color={shuffle ? 'red' : 'white'} onClick={() => setShuffle(!shuffle)} className="hidden sm:block cursor-pointer" />
  </div>
);

export default Controls;
