import "./App.css";
import Navbar from "./components/pages/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Footer from "./components/pages/Footer/Footer";
import Theme from "./components/pages/Theme/Theme";
import Purchase from "./components/pages/Purchase/Main";
import Pricing from "./components/pages/Pricing";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home}></Route>
        <Route path='/theme' Component={Theme}></Route>
        <Route path="/result" Component={Purchase}></Route>
        <Route path="/pricing" Component={Pricing}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
