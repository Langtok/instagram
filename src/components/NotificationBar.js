// src/components/NotificationBar.js
import { useEffect } from 'react';
import './NotificationBar.css';

const NotificationBar = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return <div className="notification-bar">{message}</div>;
};

export default NotificationBar;