import PropTypes from "prop-types";

import s from "./Friend.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span
        style={{ backgroundColor: isOnline ? "green" : "red" }}
        className={s.status}
      >
        {isOnline}
      </span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
