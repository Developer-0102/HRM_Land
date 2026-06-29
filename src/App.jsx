import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import LandingPage from './Landing/LandingPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
        <Routes>
<Route path="/" element={<LandingPage />} />
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
