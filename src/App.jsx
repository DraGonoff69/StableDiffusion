import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import Landing from './components/Landing';
import Login from './components/LogIn';
import SignUp from './components/SignUp';
import Between from './components/Between';
import Index from "./Home/Index";
import Contact from "./components/Contact";


// import Home from './Home/Home';

function App() {

  return (
    <Router>
      <Routes>

        <Route exact path="/" element={<Index/>} />
        <Route exact path="/Landing" element={<Landing/>} />
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path="/SignUp" element={<SignUp/>} />
        <Route exact path="/Between" element={<Between/>} />
        <Route exact path="/Contact" element={<Contact/>} />
      </Routes>
    </Router>

  );
}

export default App;
