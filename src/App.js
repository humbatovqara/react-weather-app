import './App.css';
import { CityProvider } from './Context/CityContext';
import Cards from './Components/Cards';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <CityProvider>
        <Header />
        <Cards />
      </CityProvider>
    </div>
  );
}

export default App;
