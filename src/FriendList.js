import Friend from "./Friend";

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((f) => (
        <Friend friend={f} key={f.id} />
      ))}
    </ul>
  );
}

export default FriendList;
