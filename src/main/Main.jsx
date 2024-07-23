import React, { useState, useEffect } from 'react';

const Main = () => {
  const [status, setStatus] = useState('');

  const [need, setNeeds] = useState('play');

  const [foodlvl, setFoodlvl] = useState(100);

  const [playlvl, setPlaylvl] = useState(0);

  const [cleanlvl, setCleanlvl] = useState(100);

  const handleFeed = () => {
    if (cleanlvl === 0) {
      setNeeds('Cannot feed, pet needs to be cleaned first.');
      return;
    }

    // if()
    setFoodlvl((perv) => Math.min(perv + 20, 100));

    setPlaylvl((perv) => Math.max(perv - 20, 0));

    setCleanlvl((perv) => perv - 20);
  };

  const handlePlay = () => {
    if (cleanlvl === 0) {
      setNeeds('Cannot play, pet needs to be cleaned first.');
    }

    setFoodlvl((perv) => Math.max(perv - 20, 0));

    setPlaylvl((perv) => Math.min(perv + 20, 100));

    setCleanlvl((perv) => Math.max(perv - 20, 0));
  };

  const handleCleanReset = () => {
    setCleanlvl(100);

    setFoodlvl(0);

    setPlaylvl(0);

    setNeeds('play');
  };

  useEffect(() => {
    if (foodlvl === 0) {
      setStatus('Pet is hungry! Please feed.');
    } else if (playlvl === 0) {
      setStatus('Pet is bored! Please play.');
    } else if (cleanlvl === 0) {
      setStatus('Pet is dirty! Please clean up.');
    }
  }, [foodlvl, playlvl]);

  return (
    <div>
      <h2>Pet Care: {status}</h2>
      <p>Status:</p>
      <p>Pet need: {need}</p>
      <p>Food Level: {foodlvl}%</p>
      <p>Play Level: {playlvl}%</p>
      <p>Clean Level: {cleanlvl}%</p>
      <button onClick={handleFeed}>Pet Food</button>
      <button onClick={handlePlay}>Playing with Pet</button>
      <button onClick={handleCleanReset}>Clean Animal / Reset</button>
    </div>
  );
};

export default Main;
