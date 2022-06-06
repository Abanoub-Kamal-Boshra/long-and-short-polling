// import logo from './logo.svg';
import './App.css';
import LongPolling from './longPolling';
import ShortPolling from './shortpolling';

function App() {
  return (
    <div className="App">
      <h2>Short Polling</h2>
      <ShortPolling/>
      <hr></hr>
      <h2>Long Polling</h2>
      <LongPolling/>
    </div>
  );
}

export default App;
