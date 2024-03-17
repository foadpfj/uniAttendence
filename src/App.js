import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from './pages/profile/Profile';

const App = () => {
  return (
    <Router>
      <Profile />
    </Router>
  );
};

export default App;