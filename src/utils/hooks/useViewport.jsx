import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  let rows;

  switch (true) {
    case width > 768:
      rows = 3;
      break;
    case  width <= 320:
      rows = 1;
      break;
    default:
      rows = 2;
  }

  return {
    rows,
  };
}

export default function useViewport() {
  const [rows, setRows] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setRows(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return rows;
}
