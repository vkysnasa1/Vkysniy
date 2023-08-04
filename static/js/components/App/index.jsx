import React, { useState, useEffect } from 'react';

import Loading from '../Design/Loading';
import MainContent from '../MainContent';
import './index.scss';

function App() {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const [loading, setLoading] = useState(true);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const randomDuration = getRandomInt(6500, 6800);
    setDuration(randomDuration);
    setTimeout(() => {
      setLoading(false);
    }, randomDuration);
  }, []);
  return (
    <div>
      {/* <MainContent /> */}
      <div className='App'>{loading ? <Loading /> : <MainContent />}</div>
    </div>
  );
}

export default App;
