import "./App.css";
import IssuesList from "./issues";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.{" "}
        </p>
        <IssuesList></IssuesList>
      </header>
    </div>
  );
}

export default App;
