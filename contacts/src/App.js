import './App.css';
import NavBar from './components/NavBar';
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="App">
        <NavBar />
        <div className={`App-content`} style={{justifyContent: "center", alignItems: "center"}}>
            <Gallery></Gallery>
        </div>
    </div>
  );
}

export default App;
