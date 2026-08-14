import React from 'react';
import { speakers } from '../../mocks/shared-data';
import './speakerCards.css';

const speakerCards = () => {
  return(
    <div className='speakerCards'>
      {speakers.map((data) => (
        <img key={data.key} src={data.src} height={150} loading="lazy" alt={`pastor-${data.key}`} />
      ))}
    </div>
  )
}

export default speakerCards;