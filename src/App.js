import './App.css';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/agricultura" element={<Agricultura />} />
          <Route path="/noticias" element={<Noticias />} /> */}
        </Routes>
      </Layout>
    </Router>
  );

}

export default App;
