import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          Coded by Viktoria Fedash {""}
          <a
            href="https://github.com/wittori/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
          {""} and {""}
          <a
            href="https://candid-beignet-efde6d.netlify.app/"
            target="-blank"
            rel="noreferrer"
          >
            {" "}
            hosted on Netlify{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
