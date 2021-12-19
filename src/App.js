import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import About from './component/About/About';
import Service from './component/Service/Service';
import Registration from './component/Registration/Registration';
import NotFound from './component/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom'
import Header from './component/Header/Header';
import Footer from './Footer/Footer';
import Services from './component/services/services';
function App() {
  return (
    <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="registration" element={<Registration/>} />
          <Route path="*" element={<NotFound />} />
            
         
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
