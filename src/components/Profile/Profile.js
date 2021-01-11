import React from "react";
import PropTypes from "prop-types";

import s from "./profile.module.css";
import Stats from "./Stats";

import defaultImage from "./defaultImage.jpg";

//import s from './Profile.module.scss'

const Profile = ({ name, tag, location, avatar = defaultImage, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="аватар пользователя" />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.tag}>{location}</p>
      </div>

      <Stats {...stats} />
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Profile;
