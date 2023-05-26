/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Rocket from './components/Rocket';
import Profile from './components/Profile';
import Missions from './components/Missions';
import { fetchRockets } from './redux/rocket/rocketSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="Missions" element={<Missions />} />
        <Route path="Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
