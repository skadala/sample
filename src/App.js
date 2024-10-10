import logo from './logo.svg';
import './App.css';
import { CakeView } from './feautures/cake/CakeView';
import { IcecreamView } from './feautures/icecream/IcecreamView';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      {/* <CakeView/>
      <IcecreamView/> */}
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
