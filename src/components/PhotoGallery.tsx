
import React from 'react';

const PhotoGallery: React.FC = () => {
  const photos = [
    {
      id: 1,
      src: "https://www.google.com/imgres?q=fotos%20de%20diomedes%20melancolicas%20.png&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D10153969145521640&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D10153969145521640%26id%3D162029511639%26set%3Da.427131706639&docid=DSmeqpnf0VraBM&tbnid=YuoMlMW-4S1L7M&vet=12ahUKEwjvn7_v8KWOAxVQrIQIHYE_DxYQM3oECEgQAA..i&w=427&h=427&hcb=2&ved=2ahUKEwjvn7_v8KWOAxVQrIQIHYE_DxYQM3oECEgQAA",
      alt: "Momento especial 1",
      caption: "Esos momentos que quedaron en el corazón"
    },
    {
      id: 2,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdtN2APLmSOVQ7A-Eggqpp2i7HCadV6WOyuQ&s",
      alt: "Momento especial 2", 
      caption: "Cuando la luz nos acompañaba"
    },
    {
      id: 3,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhxigDGSZDuE2Um12o382WNB5xBn4127EGLQ&s",
      alt: "Momento especial 3",
      caption: "Bajo la sombra de los recuerdos"
    },
    {
      id: 4,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzMFz2gRGQANC1N8EqspxWSRS3yfkTf8zSCg&s",
      alt: "Momento especial 4",
      caption: "Cuando todo se veía posible"
    },
    {
      id: 5,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnx7_H4czv4Gt0o7B7qxXaeX_T8HFwtVuTEw&s",
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
