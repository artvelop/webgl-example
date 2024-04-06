import { useEffect, useState } from 'react';

export const useHome = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  useEffect(() => {
    function animate() {
      requestAnimationFrame(animate);
      setRotateX((cur) => (cur += 0.01));
      setRotateY((cur) => (cur += 0.01));
    }
    animate();
  }, []);

  return { rotateX, rotateY };
};
