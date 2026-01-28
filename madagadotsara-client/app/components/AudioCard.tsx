import React from 'react';
import Link from 'next/link';
import Button from './Button';
import Card from './Card';

interface AudioCardProps {
  id: number | string;
  title: string;
  creator: string;
  price: number;
  image?: string;
  genre: string;
  bpm?: number;
}

export default function AudioCard({ id, title, creator, price, image, genre, bpm }: AudioCardProps) {
  return (
    <Card className="flex flex-col gap-4">
      {/* Image/Placeholder */}
      <div className="w-full h-40 bg-gradient-to-br from-purple-600 to-purple-900 rounded-lg flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-center">
            <svg className="w-16 h-16 text-purple-300 opacity-50 mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path d="M18 3a1 1 0 00-1.196-.15l-16 10a1 1 0 000 1.696l16 10A1 1 0 0018 17V3z" />
            </svg>
            <p className="text-purple-300 text-sm mt-2">{genre}</p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-semibold text-white text-lg mb-1 line-clamp-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-3">{creator}</p>

        {/* Meta Info */}
        <div className="flex gap-2 text-xs text-gray-500 mb-3">
          <span className="bg-gray-700 px-2 py-1 rounded">{genre}</span>
          {bpm && <span className="bg-gray-700 px-2 py-1 rounded">{bpm} BPM</span>}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between gap-2 pt-4 border-t border-gray-700">
        <div className="text-2xl font-bold text-purple-400">{price} Ar</div>
        <Link href={`/audio/${id}`}>
          <Button variant="primary" size="sm">
            Écouter
          </Button>
        </Link>
      </div>
    </Card>
  );
}
