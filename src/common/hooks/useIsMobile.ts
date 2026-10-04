import { useEffect, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

const useIsMobile = () => {
  const { width } = useWindowSize({ initializeWithValue: false });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof width === 'number') {
      setIsMobile(width < 1024);
    }
  }, [width]);

  return isMobile;
};

export default useIsMobile;
