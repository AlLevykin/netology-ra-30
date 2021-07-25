import { useState } from "react";
import List from "../List";
import Details from "../Details";
import './App.css';

function App() {

  const [selectedUser, setSelectedUser] = useState(null);

  const onUserSelected = (user) => setSelectedUser(user);

  return (
    <div className="container-sm">
      <div className="sidebar p-3">
        <div className="row">
          <List onUserSelected={onUserSelected} />
        </div>
      </div>
      <div className="content py-3">
        <Details info={selectedUser} />
      </div>
    </div>
  );
}

export default App;
