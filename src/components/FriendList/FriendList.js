import React from "react";
import PropTypes from "prop-types";

import FriendListItem from "./FriendListItem";
import s from "./FriendLi.module.css";

const FriendList = ({ friends }) => {
  if (friends === 0) return null;
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id} className={s.item}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};

export default FriendList;
