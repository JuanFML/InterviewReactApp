import "./App.css";
import IssuesList from "./issues";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Please search below.</p>
        <p>
          Although it works I wasn't able to filter directly on the API only
          here :( , so that is why the list of issues is short.
        </p>
        <IssuesList></IssuesList>
      </header>
    </div>
  );
}

export default App;
