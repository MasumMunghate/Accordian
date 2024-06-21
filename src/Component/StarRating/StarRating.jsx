import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../StarRating/StarRating.css";

const StarRating = ({ stars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover , setHover] = useState(0)

  const handleSelectStar = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex)
  };

  const handleMouseLeave = () => {
    setHover(rating)
  };
  return (
    <>
      <h1 className="text-center text-3xl">Star Rting</h1>
      <div className="flex justify-center mt-10 gap-5">
        {[...Array(stars)].map((_, index) => {
          index += 1;
          return (
            <>
              <div>
                <FaStar
                  key={index}
                  className={index <= (hover || rating) ? "active" : "inActive"}
                  onClick={() => handleSelectStar(index)}
                  onMouseMove={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave()}
                  size={40}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default StarRating;
