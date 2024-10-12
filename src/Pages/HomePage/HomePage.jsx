import "./HomePage.css";
import WholePie from "./HomePageAssests/WholePie.png";
import pieslice from "./HomePageAssests/slice_of_pie.png";
import RecipeSearch from "../../RecipeSearch";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from "./RecipeCard";
function HomePage() {

  return (
    <>
      <div className="Welcome-page">
        <div className="TitleCard">
          <h1>Cook Like a chef in your own Kitchen</h1>
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

{/* TODO: connect all elements to the div below while making 
  the div responsive and the size of the entire web app
  -center and reposition all values
  -Open onclick recipe with my link
  */}
<div>

<div className="scroll-header">
    <h3>Over 1850+ Recipes!</h3>
    <h1>A Recipe for every</h1>
    <h1>Preference and skill level</h1>

</div>
<div className="scrolling-recipes">
  <div className="recipes-container-right">
    <RecipeCard />
  </div>

  </div>
</div>
      <img src={pieslice} alt="Pie slice" className="LeftsidePie" />
    </>
  );
}

export default HomePage;