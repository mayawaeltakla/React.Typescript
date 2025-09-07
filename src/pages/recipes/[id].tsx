import React from 'react';
import { useParams } from 'react-router-dom';
import recipes from '../../data/recipes.json';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return <p>الوصفة غير موجودة</p>;

  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <h2>المكونات:</h2>
      <ul>
        {recipe.ingredients.map((ingredient: string, index: number) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>طريقة التحضير:</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetails;