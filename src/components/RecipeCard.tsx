import React, { useState } from "react";
import { Recipe } from "../types";

interface Props {
  recipe: Recipe;
}

function RecipeCard({ recipe }: Props) {
  // حالة لتبديل التفاصيل
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="recipe-card">
      <img src={process.env.PUBLIC_URL + `/images/${recipe.image}`} alt={recipe.image} className="w-full h-40 object-cover" />
      <h2>{recipe.name}</h2>

      {/* 👇 الزر */}
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "إخفاء التفاصيل" : "عرض التفاصيل"}
      </button>

      {/* 👇 التفاصيل تطلع فقط إذا showDetails true */}
      {showDetails && (
        <div style={{ marginTop: "10px" }}>
          <h3>المكونات:</h3>
          <ul>
            {recipe.ingredients.map((ing, idx) => (
              <li key={idx}>- {ing}</li>
            ))}
          </ul>
          <h3>طريقة التحضير:</h3>
          <p>{recipe.instructions}</p>
        </div>
      )}
    </div>
  );
}

export default RecipeCard;