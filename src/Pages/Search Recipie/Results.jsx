import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./Search-section.css";

function Results() {
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const ingredients = searchParams.get('ingredients');
    if (ingredients) {
      fetchRecipes(ingredients);
    }
  }, [location.search]);

  const fetchRecipes = async (ingredients) => {
    const APIKey = "c9ba34fcefc946049aa88ca8f041ba61";
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${APIKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const handleRecipeClick = async (id) => {
    const APIKey = "c9ba34fcefc946049aa88ca8f041ba61";
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${APIKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Navigate to the recipe information page
      navigate(`/recipe/${id}`, { state: { recipeInfo: data } });
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div>
      <h1 className='SearchHeader'>Here are the Results!</h1>
      <ul className='recipe-container'>
        {recipes.map(recipe => (
          <li key={recipe.id} className='recipe'>
            <img src={recipe.image} alt={recipe.title} />
            <h2>{recipe.title}</h2>
            <p>Ingredients you have: {recipe.usedIngredientCount}</p>
            <p>Ingredients Missing: {recipe.missedIngredientCount}</p>
            <p>Likes: {recipe.likes}</p>
            <button onClick={() => handleRecipeClick(recipe.id)}>View Recipe</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Results;
