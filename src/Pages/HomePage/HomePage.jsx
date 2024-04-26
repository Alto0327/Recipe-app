import "./HomePage.css";
import WholePie from "./HomePageAssests/WholePie.png";
import pieslice from "./HomePageAssests/slice_of_pie.png";
import RecipeSearch from "../../RecipeSearch";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [randomRecipes, setRandomRecipes] = useState([]);

  useEffect(() => {
    const fetchRandomRecipes = async () => {
      const APIKey = "c9ba34fcefc946049aa88ca8f041ba61";
      const numberOfRecipes = 10; // Number of random recipes to fetch
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
  return (
    <>
      <div className="Welcome-page">
        <div className="TitleCard">
          <h1>Cook Like a chef in your own Kicthen</h1>
          <h3>Tell us what's in your fridge and we'll do the rest</h3>
          <div>
            <RecipeSearch />
          </div>
          <Link to="/Search">
            <h5>Already know what to make? Search for the recipe here</h5>
          </Link>
        </div>

        <img src={WholePie} alt="right Pie" className="rightSide-img" />
      </div>

      <div className="scrolling-recipes">
  <div className="scroll-header">
    <h3>Over 1850+ Recipes!</h3>
    <h1>A Recipe for every</h1>
    <h1>Preference and skill level</h1>
  </div>
  <div className="recipes-container">
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
  <div className="recipes-container">
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
  <Link to="/Search">
    <h5 className="Scroll-Footer">
      Already Know what to make? Click here
    </h5>
  </Link>
</div>
      <img src={pieslice} alt="Pie slice" className="LeftsidePie" />
    </>
  );
}

export default HomePage;