import { useEffect, useState } from 'react';
import Carousel from './Carousel';

let index = 0;

const ImageSlide = ({ images }) => {
  const [image, setImage] = useState(images[index]);

  const changeImage = (nextIndex) => {
    // console.log(nextIndex, 'set Image');

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

  const goToImage = (index) => {
    setImage(images[index]);
  };

  return (
    <>
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
      <div className="icon-container">
        {images.map((image, index) => {
          return (
            <div key={index} className="icon" onClick={() => goToImage(index)}>
              <img src={image} className="icon-img" />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ImageSlide;
