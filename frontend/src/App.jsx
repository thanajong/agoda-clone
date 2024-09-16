import {
  BrowserRouter as Router, 
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import CreateAccount from './pages/CreateAccount.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/create-account' element={<CreateAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
