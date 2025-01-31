import React, { useState, useEffect } from 'react';
import './Notification.css';

const Notifications = () => {
  const [currentTime, setCurrentTime] = useState('');

  // Function to get the current time
  const getCurrentTime = () => {
    const date = new Date();
    return date.toLocaleTimeString(); // Customize the format as needed
  };

  useEffect(() => {
    // Update the current time immediately after component mounts
    setCurrentTime(getCurrentTime());

    // Set an interval to update time every second
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime()); // Update state with new time
    }, 1000); // Update the time every second

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="header__notifications">
      <h4>Notifications</h4>
      <ul>
        <li><span>New comment on your post</span> <span className="notification-time">{currentTime}</span></li>
        <li><span>New follower</span> <span className="notification-time">{currentTime}</span></li>
        <li><span>System update available</span> <span className="notification-time">{currentTime}</span></li>
      </ul>
    </div>
  );
};

export default Notifications;
