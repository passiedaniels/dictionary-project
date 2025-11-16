import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer className="App-footer">
        <small>
          This project was coded by{" "}
          <a href="https://github.com/passiedaniels">Pascalia A.</a>, open
          sourced on{" "}
          <a href="https://github.com/passiedaniels/dictionary-project">
            Github
          </a>{" "}
          and hosted on <a href="https://mydictionar.netlify.app/">Netlify</a>
        </small>
      </footer>
    </div>
  );
}
