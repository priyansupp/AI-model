import React, {useRef} from 'react';
import './cardHolder.css';

function CardHolder() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -200,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 200,
      behavior: 'smooth',
    });
  };

  return (
    <div className="card-holder-container">
    <div className="scroll-left" onClick={scrollLeft}>&lt;</div>
      <div className="scroll-container" ref={scrollContainerRef}></div>
      <div className="card-holder">
        <div className="card 1">
          <img src="model1.jpg" alt="Model 1" className="card-image" />
          <div className="card-details">
            <h3 className="card-title">Model Name</h3>
            <p className="card-company">Company Name</p>
            <div className="card-rating">
              <span>Rating: </span>
              <span className="rating-stars">★★★★☆</span>
            </div>
            <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.</p>
          </div>
        </div>

        <div className="card 2">
          <img src="model1.jpg" alt="Model 1" className="card-image" />
          <div className="card-details">
            <h3 className="card-title">Model Name</h3>
            <p className="card-company">Company Name</p>
            <div className="card-rating">
              <span>Rating: </span>
              <span className="rating-stars">★★★★☆</span>
            </div>
            <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.</p>
          </div>
        </div>

        <div className="card 3">
          <img src="model1.jpg" alt="Model 1" className="card-image" />
          <div className="card-details">
            <h3 className="card-title">Model Name</h3>
            <p className="card-company">Company Name</p>
            <div className="card-rating">
              <span>Rating: </span>
              <span className="rating-stars">★★★★☆</span>
            </div>
            <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.</p>
          </div>
        </div>

        <div className="card 4">
          <img src="model1.jpg" alt="Model 1" className="card-image" />
          <div className="card-details">
            <h3 className="card-title">Model Name</h3>
            <p className="card-company">Company Name</p>
            <div className="card-rating">
              <span>Rating: </span>
              <span className="rating-stars">★★★★☆</span>
            </div>
            <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.</p>
          </div>
        </div>
      </div>
      <div className="scroll-right" onClick={scrollRight}>&gt;</div>
    </div>
  );
}

export default CardHolder;
