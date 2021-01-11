import React from "react";
import Profile from "./Profile/Profile";
import userData from "../data/user.json";

import Statistics from "./Statistics/Statistics";
import statisticalData from "../data/statistical-data.json";

import FriendList from "./FriendList/FriendList";
import friends from "../data/friends.json";

import TransactionHistory from "./Transation/Transactions";
import transaction from "../data/transactions.json";

const App = () => {
  return (
    <div>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </div>
  );
};

export default App;
