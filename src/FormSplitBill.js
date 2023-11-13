import Button from "./Button";

function FormSplitBill({ selectedFriend }) {
  const friendName = selectedFriend.name;
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {friendName}</h2>

      <label>💰 Bill value</label>
      <input type="text" />

      <label>🧑‍🦱 Your expense</label>
      <input type="text" />

      <label>🧑‍🤝‍🧑 {friendName}'s expense</label>
      <input type="text" disabled />

      <label>🤑 Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{friendName}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
