import React from 'react';
import RecipeCard from '../components/RecipeCard';
import recipes from '../data/recipes.json';
import '../styles/globals.css';

const Home = () => {
  return (
    <div>
      <h1>وصفات الطبخ</h1>
      <div>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Home;