import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SCROLL_THRESHOLD = 100;

const useNavigationAnimation = () => {
  const location = useLocation();
  const initialScrollYRef = useRef(
    typeof window !== 'undefined' ? window.scrollY : 0
  );
  const [isScrolled, setIsScrolled] = useState(
    initialScrollYRef.current > SCROLL_THRESHOLD
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const disableEntryAnimation =
    location.pathname === '/contact' ||
    Boolean(location.state?.disableEntryAnimation);

  return {
    isScrolled,
    shouldAnimateEntry:
      !disableEntryAnimation &&
      initialScrollYRef.current <= SCROLL_THRESHOLD,
  };
};

export default useNavigationAnimation;
