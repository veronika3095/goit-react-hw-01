// import React from 'react';
import s from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={image} alt="User avatar" className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <div className={s.statsContainer}>
        <ul className={s.stats}>
          <li>
            <span>Followers</span>
            <span className={s.value}>{stats.followers}</span>
          </li>
          <li>
            <span>Views</span>
            <span className={s.value}>{stats.views}</span>
          </li>
          <li>
            <span>Likes</span>
            <span className={s.value}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;