import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import "./Search-section.css";

function RecipeInfoPage() {
  const location = useLocation();
  const { recipeInfo } = location.state;


  const unitAbbreviations = {
    teaspoon: 'tsp',
    tablespoon: 'tbsp',
    cup: 'cup',
    ounce: 'oz',
    pound: 'lb',
    gram: 'g',
    kilogram: 'kg',
    milliliter: 'mL',
    liter: 'L',
    pinch: 'pinch',
    dash: 'dash',
    inch: 'inch',
    clove: 'clove',
    slice: 'slice',
    piece: 'piece',
    whole: 'whole',
    can: 'can'
  };


  const uniqueIngredients = recipeInfo.extendedIngredients.filter(
    (ingredient, index, self) =>
      index ===
      self.findIndex((t) => t.name.toLowerCase() === ingredient.name.toLowerCase())
  );

  return (
    <div>
      <h1>{recipeInfo.title}</h1>
      <img src={recipeInfo.image} alt={recipeInfo.title} />
     <div className='TextArea'>
      <div className="Ingredient-section">

      <h2>Ingredients:</h2>
      <ul>
        {uniqueIngredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.amount} {unitAbbreviations[ingredient.unit]} {ingredient.name}
          </li>
        ))}
      </ul>
      </div>
      <div className="Instruction-section">
        <h2>Instructions</h2>
        <div dangerouslySetInnerHTML={{ __html: recipeInfo.instructions }} />
        </div> 
      </div>
        <button onClick={() => window.history.back()} className='Return-button'>Go Back to other Recipes</button>
    </div>
  );
}

export default RecipeInfoPage;