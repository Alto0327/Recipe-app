import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RecipeSearch() {
  const [ingredients, setIngredients] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/results?ingredients=${ingredients}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="ingredients">Enter ingredients (comma-separated):</label><br />
        <input
          className='searchBar'
          type="text"
          id="ingredients"
          name="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <button type="submit">Search Recipes</button>
      </form>
    </div>
  );
}

export default RecipeSearch;
