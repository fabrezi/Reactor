import logo from './logo.svg';
import './App.css';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Show me the MONEY!!!</title>
      </Helmet>
      <div>
        <h1>THE COURTIER</h1>
      </div>
    </div>
  );
}

export default App;
