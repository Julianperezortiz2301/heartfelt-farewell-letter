
import React from 'react';

const PhotoGallery: React.FC = () => {
  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop",
      alt: "Momento especial 1",
      caption: "Esos momentos que quedaron en el corazón"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop",
      alt: "Momento especial 2", 
      caption: "Cuando la luz nos acompañaba"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=600&fit=crop",
      alt: "Momento especial 3",
      caption: "Bajo la sombra de los recuerdos"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
      alt: "Momento especial 4",
      caption: "Cuando todo se veía posible"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
      alt: "Momento especial 5",
      caption: "Hacia nuevos horizontes"
    }
  ];

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-light text-gray-700 mb-8 text-center">
        Momentos que Atesoraremos
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div 
            key={photo.id} 
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-medium leading-relaxed">
                  {photo.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
