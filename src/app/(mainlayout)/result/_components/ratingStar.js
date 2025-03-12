"use client";

import { useState, useEffect } from "react";

export default function RatingStar({ totalStars = 5, initialRating = 0, readonly = true, onChange }) {
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(initialRating);

  useEffect(() => {
    setSelectedRating(initialRating);
  }, [initialRating]);

  const handleMouseEnter = (rating) => {
    if (readonly) return;
    setHoveredRating(rating);
  };

  const handleMouseLeave = () => {
    if (readonly) return;
    setHoveredRating(0);
  };

  const handleClick = (rating) => {
    if (readonly) return;
    setSelectedRating(rating);
    if (onChange) onChange(rating);
  };

  return (
    <div className="flex items-center">
      {[...Array(totalStars)].map((_, i) => {
        const rating = i + 1;
        const isActive = rating <= (hoveredRating || selectedRating);
        
        return (
          <span
            key={i}
            className={`text-2xl cursor-${readonly ? 'default' : 'pointer'} ${
              isActive ? "text-yellow-400" : "text-gray-400"
            }`}
            onMouseEnter={() => handleMouseEnter(rating)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(rating)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}