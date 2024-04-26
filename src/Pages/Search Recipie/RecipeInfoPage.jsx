import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function RecipeInfoPage() {
  const location = useLocation();
  const { recipeInfo } = location.state;

const handleGoBack = () => {
    window.history.back(); // Navigate back to the previous page
  };

  return (
    <div>
      <h1>{recipeInfo.title}</h1>
      <img src={recipeInfo.image} alt={recipeInfo.title} />
      <div dangerouslySetInnerHTML={{ __html: recipeInfo.instructions }} />
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
}

export default RecipeInfoPage;
