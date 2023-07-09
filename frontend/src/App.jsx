import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/surprise" element={<SurprisePage />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </>
  )
}

export default App
