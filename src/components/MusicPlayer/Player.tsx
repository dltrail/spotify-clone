/* eslint-disable jsx-a11y/media-has-caption */
import { useRef, useEffect } from 'react';

type Props = {
  activeSong: {
    hub: any
  }, isPlaying: boolean, volume: any, seekTime: any, onEnded: any, onTimeUpdate: any, onLoadedData: any, repeat: boolean, currentIndex: number
}

const Player = ({ activeSong, isPlaying, volume, seekTime, onEnded, onTimeUpdate, onLoadedData, repeat }: Props) => {
  const ref = useRef<HTMLAudioElement>(null)

  // eslint-disable-next-line no-unused-expressions
  if (ref.current) {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  useEffect(() => {
    if (ref.current != null) {
      ref.current.volume = volume;

    }
  }, [volume]);
  // updates audio element only on seekTime change (and not on each rerender):
  useEffect(() => {

    if (ref.current != null) {
      ref.current.currentTime = seekTime;

    }
  }, [seekTime]);

  return (
    <audio
      src={activeSong?.hub?.actions[1]?.uri}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;
