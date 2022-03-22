import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  let cardsToLoad;
  let initialNumberOfCards;

  switch (true) {
    case width > 768:
      cardsToLoad = 3;
      initialNumberOfCards = 12;
      break;
    case  width <= 320:
      cardsToLoad = 2;
      initialNumberOfCards = 5;
      break;
    default:
      cardsToLoad = 2;
      initialNumberOfCards = 8;
  }

  return [initialNumberOfCards, cardsToLoad]
}

export default function useViewport() {
  const [cardsSetings, setCardsSetings] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setCardsSetings(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return cardsSetings;
}
