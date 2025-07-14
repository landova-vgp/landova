import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';

function App() {
   return (
    <BrowserRouter basename="/landova">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail key={window.location.pathname}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
