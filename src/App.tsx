
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Timer from './components/Timer';
import Grid from './components/Grid'


function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Timer/>}/>
      <Route path="/grid" element={<Grid/>}/>
    </Routes>
   </Router>
  )
}

export default App
