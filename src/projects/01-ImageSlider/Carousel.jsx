import { useState } from 'react';

const images = [
  'https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
];
let index = 0;

const Carousel = () => {
  const [image, setImage] = useState(images[index]);

  const changeImage = (nextIndex) => {
    console.log('set Image');
    let newIndex = index + nextIndex;
    if (newIndex < 0) {
      setImage(images[images.length - 1]);
      index = images.length - 1;
    } else if (newIndex > images.length - 1) {
      setImage(images[0]);
      index = 0;
    } else {
      setImage(images[newIndex]);
      index = newIndex;
    }
  };

  return (
    <main className="carousel">
      <div className="title">
        <h1>Carousel : Image Slider</h1>
        <div className="underline"></div>
      </div>
      <div className="section-center carousel-center">
        <article className="image-slider">
          <button
            className="carousel-btn prev-btn"
            onClick={() => {
              changeImage(-1);
            }}
          >
            ◀
          </button>
          <img src={image} alt="image" className="carousel-img" />
          <button
            className="carousel-btn next-btn"
            onClick={() => {
              changeImage(+1);
            }}
          >
            ▶
          </button>
        </article>
      </div>
    </main>
  );
};
export default Carousel;
