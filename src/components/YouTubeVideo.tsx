
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface YouTubeVideoProps {
  videoId: string;
  title?: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ 
  videoId = "dQw4w9WgXcQ", // Default video ID (can be changed)
  title = "Un mensaje especial para ti" 
}) => {
  return (
    <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-xl mb-12 slide-up">
      <CardContent className="p-8">
        <h3 className="text-2xl font-light text-gray-700 mb-6 text-center">
          {title}
        </h3>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            src={`<iframe width="560" height="315" src="https://www.youtube.com/embed/f2HDj6yhdC4?si=dBstmA2UvClZH7cJ" ${videoId} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`}
            title="Video de despedida"
           
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="text-center text-sm text-gray-500 mt-4 italic">
          Algunas palabras se expresan mejor con música y imágenes
        </p>
      </CardContent>
    </Card>
  );
};

export default YouTubeVideo;
