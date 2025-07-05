
import React from 'react';
import { Heart, Star } from 'lucide-react';
import FarewellMessage from './FarewellMessage';
import PhotoGallery from './PhotoGallery';
import YouTubeVideo from './YouTubeVideo';

interface FarewellPageProps {
  fromName: string;
  toName: string;
}

const FarewellPage: React.FC<FarewellPageProps> = ({ fromName, toName }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-nostalgic-blue/10 via-nostalgic-lavender/10 to-nostalgic-beige/10">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-nostalgic-blue/20 to-nostalgic-lavender/20">
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="flex justify-center items-center space-x-4 mb-6 fade-in">
            <Star className="h-8 w-8 text-nostalgic-blue/70" />
            <Heart className="h-10 w-10 text-nostalgic-lavender" />
            <Star className="h-8 w-8 text-nostalgic-blue/70" />
          </div>
          <h1 className="text-4xl md:text-6xl font-light text-gray-700 mb-4 fade-in">
            Una Despedida Especial
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light fade-in">
            De {fromName} para {toName}
          </p>
          <div className="mt-8 w-32 h-0.5 bg-gradient-to-r from-transparent via-nostalgic-blue to-transparent mx-auto fade-in"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Farewell Message */}
        <FarewellMessage fromName={fromName} toName={toName} />
        
        {/* Photo Gallery */}
        <PhotoGallery />
        
        {/* YouTube Video */}
        <YouTubeVideo 
          videoId="dQw4w9WgXcQ" 
          title="Una canción que nos recuerda momentos especiales"
        />
        
        {/* Footer */}
        <div className="text-center mt-16 slide-up">
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <p className="text-gray-600 text-lg font-light mb-4">
              "Los finales solo son el comienzo de algo nuevo"
            </p>
            <div className="flex justify-center items-center space-x-2">
              <Heart className="h-5 w-5 text-nostalgic-blue" />
              <span className="text-sm text-gray-500">
                Hecho con amor y cariño
              </span>
              <Heart className="h-5 w-5 text-nostalgic-blue" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarewellPage;
