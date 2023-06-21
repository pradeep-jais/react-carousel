import ImageSlide from './ImageSlide';

import images from './images';

const Carousel = () => {
  return (
    <main className="carousel">
      <div className="title">
        <h1>Carousel : Image Slider</h1>
        <div className="underline"></div>
      </div>
      <div className="section-center carousel-center">
        <ImageSlide images={images} />
      </div>
    </main>
  );
};
export default Carousel;
