import React, { useState, useEffect } from 'react';

import { 
  Container,
  Post,
  Avatar,
  PostInfo,
  UserName,
  PostTime,
  AudioContainer,
  PlayButton,
  AudioProgress,
  Time,
  Exit
} from './styles';
import { FaPlay, FaPause } from 'react-icons/fa';

export default function AudioPlayer({ onExit }) {
  const [ playing, setPlaying ] = useState(false);
  const [ progress, setProgress ] = useState(0);
  const [ duration, setDuration ] = useState(0);
  const player = React.createRef();

  setInterval(() => {
    if (!player.current) return;
    setProgress(player.current.currentTime / player.current.duration)
  }, 100)

  useEffect(() => {
    if (!player.current || isNaN(player.current.duration) || duration) return;
    setDuration(player.current.duration);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [player])

  function handlePlayButton() {
    if (!player.current) return;



    if (playing) {
      player.current.pause();
    } else {
      player.current.play();
    }

    setPlaying(!playing);
  }

  return (
    <Container>
      <Exit onClick={onExit}>&times;</Exit>
      <Post>
        <Avatar src='https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80' />
        <PostInfo>
          <UserName>Flavio Duarte</UserName>
          <PostTime>12h ago</PostTime>
        </PostInfo>
      </Post>
      <AudioContainer>
        <PlayButton playing={playing} onClick={handlePlayButton}>
          { playing ? 
            (<FaPause />) : 
            (<FaPlay />)
          }
        </PlayButton>
        <AudioProgress value={progress} type="range" min="0" max="1" step="0.001" onChange={() => {}} />
        <Time>{ `${Math.floor(duration/60)}:${Math.floor(duration%60)}` }</Time>
      </AudioContainer>
      <audio ref={player}>
        <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3" />
      </audio>
    </Container>
  );
}
