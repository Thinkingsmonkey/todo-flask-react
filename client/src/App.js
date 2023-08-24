import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetail from './BlogDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route element={<Home />} exact path="/"></Route>
            <Route element={<Create />} exact path="/create"></Route>
            <Route element={<BlogDetail />} path="/blogs/:id"></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;