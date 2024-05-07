"use client"

import React from 'react';
import useSoundcloudFeed from '@/hooks/use-soundcloud-feed';

const Tracklist: React.FC = () => {
  const { tracks, loading } = useSoundcloudFeed();

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      {tracks.map((track: any) => (
        <div key={track.id} className="p-4 m-2 bg-gray-200 rounded">
          <a href={track.permalink_url} target="_blank" rel="noopener noreferrer">
            {track.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Tracklist;
