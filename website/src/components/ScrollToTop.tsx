import { useEffect } from 'react';
import { useLocation } from 'react-router';

/** Client-side navigation keeps the scroll position; a new page should start at the top. */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default ScrollToTop;
