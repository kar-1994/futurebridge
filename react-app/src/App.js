import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Movies from './component/movies/Movies';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path="/movies" element={<Movies></Movies>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
