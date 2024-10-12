import React, { useEffect, useState } from 'react';


function RecipeCard() {
    const [randomRecipes, setRandomRecipes] = useState([]);


    

    useEffect(() => {
      const fetchRandomRecipes = async () => {
        const APIKey = import.meta.env.VITE_API_VAR;
        const numberOfRecipes = 15; 
        const url = `https://api.spoonacular.com/recipes/random?number=${numberOfRecipes}&apiKey=${APIKey}`;
  
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setRandomRecipes(data.recipes);
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
      };
  
      fetchRandomRecipes();
    }, []);
  
  // TODO: make the recipe cards into own file
      // Use a utility function to duplicate recipe cards for continuous scrolling
      useEffect(() => {
          const duplicateCards = () => {
            const container = document.getElementById('recipesContainer');
            if (!container) return; // Ensure the container exists before proceeding
        
            const cards = container.getElementsByClassName('recipe-card');
            const clone = [...cards].map(card => card.cloneNode(true));
            clone.forEach(card => container.appendChild(card));
          };
        
          duplicateCards();
        }, [randomRecipes]);
    return(
        <div>
            {/* <div>
    {randomRecipes.map(recipe => (
      <div key={recipe.id} className="recipe-card">
        <a href={recipe.sourceUrl} target="_blank">
          <img src={recipe.image} alt={recipe.title} />
          <h2>{recipe.title}</h2>
          <p>Ready in {recipe.readyInMinutes} minutes</p>
        </a>
      </div>
    ))}
  </div>
  <div>
    {randomRecipes.map(recipe => (
      <div key={recipe.id} className="recipe-card">
        <a href={recipe.sourceUrl} target="_blank">
          <img src={recipe.image} alt={recipe.title} />
          <h2>{recipe.title}</h2>
          <p>Ready in {recipe.readyInMinutes} minutes</p>
        </a>
      </div>
    ))}
  </div> */}
        </div>
    )
}

export default RecipeCard;