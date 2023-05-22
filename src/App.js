import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import PriceList from './Components/priceList/PriceList';
import Dashboard from './Components/Dashaboard/Dashboard';

function App() {
  return (
    <div className="App">
       
      <Navbar></Navbar>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
    
    </div>
  );
}

export default App;
