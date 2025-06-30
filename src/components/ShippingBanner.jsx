import { useEffect, useState } from 'react';
import './shippingBanner.css';
import { FaTimes } from 'react-icons/fa';

function ShippingBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 5000);
    const autoClose = setTimeout(() => setVisible(false), 9300); // 5 sec μετά

    return () => {
      clearTimeout(timer);
      clearTimeout(autoClose);
    };
  }, []);

  const handleClose = () => setVisible(false);

  return (
    <div className={`shipping-banner ${visible ? 'show' : ''}`}>
      <span>🚚 Free shipping for all orders!</span>
      <FaTimes className="close-icon" onClick={handleClose} />
    </div>
  );
}

export default ShippingBanner;
