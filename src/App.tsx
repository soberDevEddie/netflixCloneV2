import { type FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// My files
import Home from './pages/Home';
import Watch from './pages/Watch';
import Navbar from './components/Navbar';

const App: FC = () => {
  return (
    <Router>
      <Navbar />
      {/* <Home/> */}
      <Watch />
    </Router>
  );
};

export default App;
