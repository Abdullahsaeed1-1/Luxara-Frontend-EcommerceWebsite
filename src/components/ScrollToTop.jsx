import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ==========================================
// SCROLL TO TOP
// App.jsx mein <Router> ke andar daalo
// Har page change pe automatically upar jaayega
// ==========================================

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export default ScrollToTop;