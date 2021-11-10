import SideNavBar from './components/sidenavbar/SideNavBar';
import Header from './components/header/Header';
import Map from './components/delivery/Map/map';
import './App.scss';

const App = () => {
  return (
    <>
      <Header />
      <div className='main-container'>
        <SideNavBar />
        <Map />
      </div>
    </>
  );
};

export default App;
