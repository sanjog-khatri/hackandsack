import React from 'react';
import './Notification.css';

const Notifications = ({ getCurrentTime }) => (
  <div className="header__notifications">
    <h4>Notifications</h4>
    <ul>
      <li><span>New comment on your post</span> <span className="notification-time">{getCurrentTime()}</span></li>
      <li><span>New follower</span> <span className="notification-time">{getCurrentTime()}</span></li>
      <li><span>System update available</span> <span className="notification-time">{getCurrentTime()}</span></li>
    </ul>
  </div>
);

export default Notifications;
