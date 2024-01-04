
import './App.css';
import Landingpage from './pages/Landingpage';
import Home from './pages/Home';
import WatchHistory from './pages/WatchHistory';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>


       <Routes>
       <Route path='/' element={<Landingpage/>}/>
       <Route path='/home' element={ <Home/>}/>
       <Route path='/watch-history' element={<WatchHistory/>}/>
      </Routes>

     <Footer/>

      
     </div>
  );
}

export default App;
