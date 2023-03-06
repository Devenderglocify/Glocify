import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Component/Home';
import {Routes, Route} from "react-router-dom";
import { NavMenu } from './Component/NavMenu';
import { WebDevelopment } from './Component/WebDevelopment';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webdevelopment" element={<WebDevelopment />} />
        </Routes> 
        <Footer />
    </div>
  );
  
}

export default App;
