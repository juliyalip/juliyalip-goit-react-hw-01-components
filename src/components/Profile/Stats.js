//import React from 'react'
import PropTypes from "prop-types";
import s from "./stats.module.css";
//import s from './StatsList.module.scss'

const Stats = ({ followers, views, likes }) => {
  return (
    <ul className={s.stats}>
      <li>
        <span className={s.label}>Followers </span>
        <span>{followers}</span>
      </li>
      <li>
        <span className={s.label}>Views </span>
        <span>{views}</span>
      </li>
      <li>
        <span className={s.label}>Likes </span>
        <span>{likes}</span>
      </li>
    </ul>
  );
};
Stats.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Stats;
