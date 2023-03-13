import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from "./pages/Home.js";
import AddEdit from './pages/AddEdit'
import View from './pages/View';
function App() {
  return (
    <div className="App">
    <Router>

      <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/addContact" element={<AddEdit/>} />
        <Route path="/update/:id" element={<AddEdit/>} />
        <Route path="/view/:id" element={<View/>} />

      </Routes>

    </Router>
    </div>
  );
}

export default App;
