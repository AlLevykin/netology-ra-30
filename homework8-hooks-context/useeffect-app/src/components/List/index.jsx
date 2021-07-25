import { useState, useEffect } from "react";
import Loading from '../Loading/Loading';

function List({ onUserSelected }) {

  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");

  useEffect(() => {
    fetch("/data/users.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const selectUser = (userId) => {
    if (selectedUserId !== userId) {
      setSelectedUserId(userId);
      onUserSelected && onUserSelected(users.find(user => user.id === userId));
    }
  }

  return (
    users.length > 0 ?
      <div className="list-group">
        {users.map(user =>
          <button
            key={`user-${user.id}`}
            className={`list-group-item list-group-item-action${(selectedUserId === user.id) ? " active" : ""}`}
            onClick={() => selectUser(user.id)}
          >
            {user.name}
          </button>)}
      </div>
      :
      <Loading />
  );
}

export default List;