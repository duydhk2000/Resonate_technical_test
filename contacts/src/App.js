import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar />
        <div className={`App-content`} style={{justifyContent: "center", alignItems: "center"}}>

        </div>
    </div>
  );
}

export default App;
