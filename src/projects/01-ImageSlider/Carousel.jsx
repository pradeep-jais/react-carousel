import { useEffect, useState } from 'react';
import ImageSlide from './ImageSlide';

import imageURLs from './images';

const Carousel = () => {
  const [images, setImages] = useState(null);

  // Creating blob object url to store data locally, this will avoid fetching carousel image every time from server while storing it locally
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagePromises = imageURLs.map(async (url) => {
          const response = await fetch(url);
          const blob = await response.blob();
          // console.log(blob);
          return URL.createObjectURL(blob);
        });

        const fetchedImages = await Promise.all(imagePromises);
        // console.log(fetchedImages);
        setImages(fetchedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <main className="carousel">
      <div className="title">
        <h1>Carousel : Image Slider</h1>
        <div className="underline"></div>
      </div>
      <div className="section-center carousel-center">
        {images ? (
          <ImageSlide images={images} />
        ) : (
          <div className="loading"></div>
        )}
      </div>
    </main>
  );
};
export default Carousel;
