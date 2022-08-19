import reactLogo from '/react.svg';
import millionLogo from '/million.svg';
import createStore from './hooks/useStore/createStore';
import Button from './Button';
import ResetButton from './ResetButton';
import './App.css';
createStore({ data: 0, storeKey: 'count' });
function App() {
  return (
    <div className="App">
      <div>
        <a href="https://millionjs.org" target="_blank">
          <img src={millionLogo} className="logo" alt="Million logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>Million + React {state}</h1>
      <div className="card">
        <Button />
      </div>
      <div className="card">
        <ResetButton />
      </div>
      <p className="read-the-docs">
        Click on the Million and React logos to learn more
      </p>
    </div>
  );
}

export default App;
