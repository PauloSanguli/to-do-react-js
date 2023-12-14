import logo from './logo.svg';
import './App.css';
import Canvas from './components/Canvas'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Canvas style="top: 10%;left: 10%;"/>
      <Home />
    </div>
  );
}

export default App;
