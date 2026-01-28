import React, { useState } from 'react';

interface AudioPlayerProps {
  title: string;
  artist: string;
  isPreview?: boolean;
}

export default function AudioPlayer({ title, artist, isPreview = true }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(180); // 3 minutes

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = (currentTime / duration) * 100;

  return (
    <div className="w-full bg-gray-800 border border-gray-700 rounded-lg p-6 space-y-4">
      {isPreview && (
        <div className="bg-purple-600/20 border border-purple-600/50 rounded-lg px-4 py-2 text-sm text-purple-300">
          🔊 Aperçu watermarké (30 secondes)
        </div>
      )}

      {/* Song Info */}
      <div>
        <h3 className="font-semibold text-white text-lg">{title}</h3>
        <p className="text-gray-400">{artist}</p>
      </div>

      {/* Player Controls */}
      <div className="space-y-3">
        {/* Progress Bar */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500 min-w-10">{formatTime(currentTime)}</span>
          <div
            className="flex-1 h-1 bg-gray-700 rounded-full cursor-pointer group"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const percent = (e.clientX - rect.left) / rect.width;
              setCurrentTime(percent * duration);
            }}
          >
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full group-hover:bg-purple-400 transition-colors"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs text-gray-500 min-w-10">{formatTime(duration)}</span>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors"
          >
            {isPlaying ? (
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 9l4-4v8l4-4v8l6-8v16H6z" />
            </svg>
          </button>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.26 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
          <div className="flex-1 h-1 bg-gray-700 rounded-full">
            <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full" style={{ width: '70%' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
