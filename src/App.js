import "./App.css";
import IssuesList from "./issues";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Please search below.</p>
        <IssuesList></IssuesList>
      </header>
    </div>
  );
}

export default App;
