import logo from "./logo.svg";
import "./App.css";
import UserList from "./UserList/UserList";

function App() {
  return (
    <div className="App">
      <h1>workshop API</h1>
      <div>
        <UserList />
      </div>
    </div>
  );
}

export default App;
