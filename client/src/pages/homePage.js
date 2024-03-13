import React from 'react';
import './homePage.css';
import LeftProfile from '../components/left_profile';
import CenterCont from '../components/centercont';
import Spotlight from '../components/spotlight';

function Homepage() {
  return (
    <div className='homepage'>
      <div className='cont'>
        <div className='left'>
          <LeftProfile />
        </div>
        <div className='center'>
          <CenterCont />
        </div>
        <div className='right'>
          <Spotlight />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
