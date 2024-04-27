import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Carousel.scss';

const Carousel = ({ items }: { items: React.ReactNode[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        <TransitionGroup>
          <CSSTransition key={currentIndex} timeout={500} classNames={'slide'}>
            <div className="carousel-item">{items[currentIndex]}</div>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <button className="carousel__btn" onClick={goToPrevSlide}>
          Назад
        </button>
        <button className="carousel__btn" onClick={goToNextSlide}>
          Вперед
        </button>
      </div>
    </div>
  );
};

export default Carousel;
