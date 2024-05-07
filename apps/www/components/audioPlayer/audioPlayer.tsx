import React, { useRef, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import WaveSurfer from 'wavesurfer.js';
import { PlayButton, PauseButton } from './audioButton';
import { SpaceBackground } from "../spaceBackground"
import { CardDemo } from './cardDemo';
import "./styles.css"

const audioUrls = [
  '/sounds/silent-enemy.mp3',
];

const formatTime = (seconds: any) => {
  return [seconds / 60, seconds % 60].map((v) => `0${Math.floor(v)}`.slice(-2)).join(':');
}

const AudioPlayer = () => {
  const containerRef = useRef(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const [urlIndex, setUrlIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const songTitles = audioUrls.map(url => url.split('/').pop()?.replace('.mp3', '').replace(/-/g, ' '));

  // 컴포넌트가 마운트될 때 한 번만 실행
  useEffect(() => {
    if (containerRef.current && !wavesurferRef.current) {
      wavesurferRef.current = WaveSurfer.create({
        container: containerRef.current,
        height: 80, // 웨이브폼 전체 높이
        barWidth: 1, // 막대의 너비를 설정합니다.
        barHeight: 1, // 막대의 높이 비율을 설정합니다. 1 이상으로 설정할 수 있습니다.
        barGap: 3, // 막대 사이의 간격을 설정합니다.
        waveColor: 'rgb(0, 255, 0)',
        progressColor: 'rgb(115, 152, 93)',
        cursorColor: 'white',
      });

      if (wavesurferRef.current) {
        wavesurferRef.current.on('ready', () => {
          console.log('Wavesurfer is ready');
          if (wavesurferRef.current) {
            wavesurferRef.current.playPause(); // 처음 로딩 후 자동 재생
          }
        });
      }

      wavesurferRef.current.on('play', () => {
        setIsPlaying(true);
      });

      wavesurferRef.current.on('pause', () => {
        setIsPlaying(false);
      });

      wavesurferRef.current.on('audioprocess', (time) => {
        setCurrentTime(time);
      });
    } else {
      return () => {
        if (wavesurferRef.current) {
          wavesurferRef.current.destroy();
          wavesurferRef.current = null;
        }
      };
    }
  }, []);

  // URL 인덱스가 변경될 때 오디오 URL을 업데이트
  useEffect(() => {
    if (wavesurferRef.current) {
      wavesurferRef.current.load(audioUrls[urlIndex]);
    }
  }, [urlIndex]);

  const onUrlChange = () => {
    setUrlIndex((index) => (index + 1) % audioUrls.length);
  };

  const onPlayPause = () => {
    wavesurferRef.current && wavesurferRef.current.playPause();
  };

  return (
    <>
    <div className="w-full items-center md:flex-row bg-background border-t border-primary">
      <div className="flex flex-row items-center px-2 py-2 space-x-4">
        <img src="https://i1.sndcdn.com/artworks-d9cpyeY1GoOPnDGI-tMeyyw-t500x500.jpg" width={36} height={36} alt="Album Cover" />
        {/* <div className="w-full"> */}
        {/* <div className="w-1/12">
          <p className="font-bold text-[15px]">Ariana</p>
          <p className="text-[9px]">Sébastien Léger</p>
        </div> */}
        <div style={{ display: 'flex', gap: '1em' }}>
          {/* <button onClick={onUrlChange}>Change audio</button> */}
          <button onClick={onPlayPause} style={{ minWidth: '1em' }}>
            {isPlaying ? <PauseButton/> : <PlayButton/>}
          </button>
        </div>
        <div className="w-full">
        <p className="font-bold text-[15px]">
          Ariana
          <span className="font-normal text-[12px]"> - Sébastien Léger</span>
        </p>
        <div className="waveform-container w-full" ref={containerRef}>
          <p className="bg-secondary" style={{ position: 'absolute', left: '0', bottom: '0', zIndex: "50", fontSize: "9px" }}>
            {formatTime(currentTime)}
          </p>
          <p className="bg-secondary" style={{ position: 'absolute', right: '0', bottom: '0', zIndex: "50", fontSize: "9px" }}>
            {formatTime(currentTime)}
          </p>
        </div>
        </div>
        {/* </div> */}
      </div>
      </div>
    </>
  );
};

export default AudioPlayer;
