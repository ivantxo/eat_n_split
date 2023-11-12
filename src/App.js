import { useState } from "react";
import "./index.css";
import FriendList from "./FriendList";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((s) => !s);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={initialFriends} />
        <Button onClick={handleShowAddFriend}>Add friend</Button>
        {showAddFriend && <FormAddFriend />}
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
