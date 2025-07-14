import { HashRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './ScrollToTop';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';

function App() {
   return (
    <HashRouter>
       <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail key={window.location.pathname} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
