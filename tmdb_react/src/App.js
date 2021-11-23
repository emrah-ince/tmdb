import { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import MoviePage from './pages/MoviesPage.js';
import HomePage from './pages/HomePage.js';
import PeoplePage from './pages/PeoplePage.js';
import TvPage from './pages/TvPage';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
    return (


      <BrowserRouter>
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie" element={<MoviePage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/tv" element={<TvPage />} />
          </Routes>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;


// <div className="App">
// <Nav />
// <Movies />
// </div>