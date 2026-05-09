"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Music, Music4 } from "lucide-react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasAutoStarted = useRef(false);

  useEffect(() => {
    audioRef.current = new Audio("/background-music.mp3");
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const startPlayback = useCallback(() => {
    if (hasAutoStarted.current || !audioRef.current) return;
    hasAutoStarted.current = true;

    audioRef.current.play()
      .then(() => setIsPlaying(true))
      .catch(e => console.log("Playback prevented:", e));

    // Remove listeners after first trigger
    document.removeEventListener("click", startPlayback);
    document.removeEventListener("touchstart", startPlayback);
    document.removeEventListener("scroll", startPlayback);
    document.removeEventListener("keydown", startPlayback);
  }, []);

  useEffect(() => {
    // Try autoplay immediately (works in some browsers)
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          hasAutoStarted.current = true;
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay blocked — wait for first user interaction anywhere
          document.addEventListener("click", startPlayback, { once: true });
          document.addEventListener("touchstart", startPlayback, { once: true });
          document.addEventListener("scroll", startPlayback, { once: true });
          document.addEventListener("keydown", startPlayback, { once: true });
        });
    }

    return () => {
      document.removeEventListener("click", startPlayback);
      document.removeEventListener("touchstart", startPlayback);
      document.removeEventListener("scroll", startPlayback);
      document.removeEventListener("keydown", startPlayback);
    };
  }, [startPlayback]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(e => console.log("Playback prevented:", e));
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 3, duration: 0.8, ease: "easeOut" }}
      className="fixed bottom-8 right-8 z-50"
    >
      <div className="relative group">
        <div className={`absolute inset-0 bg-gold rounded-full blur-md opacity-40 transition-opacity duration-500 ${isPlaying ? 'animate-pulse opacity-70' : 'group-hover:opacity-100'}`} />
        <button
          onClick={togglePlay}
          className="relative flex items-center justify-center w-16 h-16 rounded-full bg-charcoal text-gold shadow-2xl transition-transform duration-300 hover:scale-105 focus:outline-none border border-gold/20"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <Music className="w-6 h-6 animate-pulse" />
          ) : (
            <Music4 className="w-6 h-6" />
          )}
        </button>
      </div>
    </motion.div>
  );
}
