import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome'
import Driver from './components/Driver';
import Rider from './components/Rider';
import { Header } from './components/Header';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState();


  return (
    <div className="App">
       <BrowserRouter>
       <Header />
        <Routes>
          <Route path="/" exact element={<Welcome user={user} setUser={setUser} />} />
          <Route path="/rider" exact element={<Rider />} />
          <Route path="/driver" exact element={<Driver />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
