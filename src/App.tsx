import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/index';
import RecipeDetails from './pages/recipes/[id]';
import Favorites from './pages/favorites';
import KitchenBackground from './components/KitchenBackground';


const App = () => {
  return (
    <> 
    <KitchenBackground />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;