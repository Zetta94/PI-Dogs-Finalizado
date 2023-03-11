import { Route,Routes,useLocation } from 'react-router-dom';
import './App.css';
//?Components
import LandingPage from './components/landingPage/LandingPage';
import Home from './components/Home/Home'
import Detail from './components/Details/Detail';
import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav"

function App() {
  const location = useLocation()
  return (
    <div className="App"> 
      {location.pathname !== '/' && <Nav/>}
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<Home/>}/> 
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/form" element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
