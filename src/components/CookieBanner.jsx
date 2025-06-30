import { useEffect, useState } from 'react';
import './cookieBanner.css';

function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted');
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p>We use cookies to improve your experience on our site.</p>
      <button onClick={handleAccept}>Accept</button>
    </div>
  );
}

export default CookieBanner;
