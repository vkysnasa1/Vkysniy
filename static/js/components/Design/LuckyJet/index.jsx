import React from 'react';
import { useSpring, animated } from 'react-spring';
import './index.scss';

function LuckyJet() {
  return (
    <div>
      <div className='fly-lucky' />
      <div className='fire' />
    </div>
  );
}

export default LuckyJet;
