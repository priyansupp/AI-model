import React, { useEffect, useState } from 'react'
import { Rating } from 'react-simple-star-rating';
import axios from 'axios';

export default function RatingComponent({ id }) {
  const [_, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    axios.patch(`/api/models/${id}`, {rating: rate})
    .then(response => {
      console.log(response.data);
    })
    .catch(e => {
      console.log(`Error in fetching model: ${e}`);
    });
  }

  return (
    <div className='App'>
      <Rating
        onClick={handleRating}
      />
    </div>
  )
}