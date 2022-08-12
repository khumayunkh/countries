import { Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route
          path='/profile'
          element={<Profile/>}
        />
        <Route
          path='/'
          element={<Body/>}
        />
      </Routes>
    </div>
  );
}

export default App;
