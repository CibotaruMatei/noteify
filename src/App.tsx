import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { UserProvider } from './components/contexts/UserContexts';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';

const App = () => {
  return <div className="App">
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </UserProvider>
    </Router>
  </div>;
}

export default App;
