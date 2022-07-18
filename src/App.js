
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Notfound from './components/Notfound';
import All from './components/All';

function App() {
  return (
   <>
   <Header/>
            <Routes> 
                          <Route  path="/"   element={<Home />}/>
                           <Route  path="/All" element={<All/>}/>
                           <Route  path="*"element={<Notfound/>}/>
                         
                 </Routes>
     <Footer/>
    </>
  );
}

export default App;
