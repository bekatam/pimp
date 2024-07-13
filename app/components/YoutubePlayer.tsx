"use client"

import { useEffect, useState } from 'react';
import album from '../../public/img/album.jpg';
import pause from '../../public/img/pause.png';
import play from '../../public/img/play.png';
import forward from '../../public/img/forward.png';
import Image from 'next/image';

const YouTubePlayer = () => {
  const [player, setPlayer] = useState(null);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [volume, setVolume] = useState(30);

  useEffect(() => {
    const playButton = document.querySelector('.play');
    const forward = document.querySelectorAll('.forward');
    const albumCover = document.querySelector('.album-cover');
    const input = document.querySelector('.input__range');
    const playerWrapper = document.querySelector('.player__wrapper');

    playerWrapper?.addEventListener('mouseenter', function() {
      input.style.transition = 'opacity 0s';
      input.style.opacity = '1';
      playButton.style.opacity = '1'
      forward[0].style.opacity = '1'
      forward[1].style.opacity = '1'
      albumCover.style.filter = 'blur(3px) brightness(0.7)';
    });
    
    playerWrapper?.addEventListener('mouseleave', function() {
      input.style.transition = 'opacity 1s';
      input.style.opacity = '0';
      playButton.style.opacity = '0'
      forward[0].style.opacity = '0'
      forward[1].style.opacity = '0'
      albumCover.style.filter = '';
    });

    forward.forEach(item=>{
      item.addEventListener('mouseenter', function () {
        albumCover.style.filter = 'blur(3px) brightness(0.7)';
      })
      item.addEventListener('mouseleave', function () {
        albumCover.style.filter = '';
      })
    })

    albumCover?.addEventListener('mouseenter', function() {
      albumCover.style.filter = 'blur(3px) brightness(0.7)';
    });

    albumCover?.addEventListener('mouseleave', function() {
      albumCover.style.filter = '';
    });

    playButton?.addEventListener('mouseenter', function() {
      albumCover.style.filter = 'blur(3px) brightness(0.7)';
    });

    playButton?.addEventListener('mouseleave', function() {
      albumCover.style.filter = '';
    });

    const loadYouTubeAPI = () => {
      window.onYouTubeIframeAPIReady = () => {
        const playerInstance = new window.YT.Player('player', {
          height: '0',
          width: '0',
          playerVars: {
            listType: 'playlist',
            list: 'PLXnrMr10H6GQYrxOprlTnk1JroXbbFqvu', 
            shufflePlaylist: true,
            volume: 5
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
          },
        });
        setPlayer(playerInstance);
      };

      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    };

    const onPlayerReady = (event) => {
      event.target.setShuffle(true);
    };

    const onPlayerStateChange = (event) => {
      if (event.data === window.YT.PlayerState.ENDED) {
        event.target.nextVideo();
      }
    };

    loadYouTubeAPI();
  }, []);

  const toggleMusic = () => {
    const albumCover = document.querySelector('.album-cover');
    if (musicPlaying) {
      player.pauseVideo();
      albumCover.style.animation = '';
    } else {
      player.setShuffle(true);
      player.setVolume(5);
      player.playVideo();
      albumCover.style.animation = 'spin 30s linear infinite';
    }
    setMusicPlaying(!musicPlaying);
  };

  const nextVideo = () => {
    player.nextVideo();
  };

  const previousVideo = () => {
    player.previousVideo();
  };

  return (
    <div className='player__wrapper'>
      <div id="youtube-player">
        <Image className="album-cover" src={album} alt='album' />
        <button onClick={toggleMusic} className='play'>
          {!musicPlaying ? <Image src={play} alt='play' style={{transform: 'translateX(0px)'}} /> : <Image src={pause} alt='pause' />}
        </button>
        <div id="player"></div>
      </div>
      <button onClick={previousVideo} className='forward forward__back'><Image src={forward} alt='back'/></button>
      <button onClick={nextVideo} className='forward'><Image src={forward} alt='back'/></button>
      <input 
        className='input__range'
        type='range'
        value={volume}
        onChange={(e) => {
          player.setVolume(e.target.value);
          setVolume(e.target.value);
        }}
      />
    </div>
  );
};

export default YouTubePlayer;
