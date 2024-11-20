//import logo from './logo.svg';
import './App.css';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Welcome to courtier.</title> 
      </Helmet>
      <div>
        <h1>THE COURTIER</h1>
      </div>
      <img src={require('C:\Users\projects\Reactor\images\mogulinsuit.PNG')}/>
    </div>
  );
}

export default App;
