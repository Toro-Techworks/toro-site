import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    const behavior = location.state?.instantScrollTop ? 'auto' : 'smooth';
    window.scrollTo({
      top: 0,
      left: 0,
      behavior,
    });
  }, [pathname, location.state]);

  return null;
};

export default ScrollToTop;
