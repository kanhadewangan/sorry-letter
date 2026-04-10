import { useEffect, useRef, useState } from 'react';
import bgMusic from '../assets/bairan-pendujattcomse_7QNZXUWK.mp3';

export default function BackgroundAudio() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      if (!isPlaying && audioRef.current) {
        audioRef.current.volume = 0; // Start completely silenced
        
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          
          // Fade in the volume smoothly over 5 seconds
          let vol = 0;
          const fadeInterval = setInterval(() => {
            vol += 0.05;
            if (vol >= 1) {
              audioRef.current.volume = 1;
              clearInterval(fadeInterval);
            } else {
              audioRef.current.volume = vol;
            }
          }, 250); // 20 steps of 0.05 every 250ms = 5000ms = 5 seconds
          
        }).catch((e) => {
          console.log("Audio play failed, waiting for stronger interaction", e);
        });
      }
    };

    // Browsers require a user gesture to play audio. 
    // We attach this globally so the very first click on the Envelope starts the song!
    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, [isPlaying]);

  return (
    <audio ref={audioRef} src={bgMusic} loop />
  );
}
