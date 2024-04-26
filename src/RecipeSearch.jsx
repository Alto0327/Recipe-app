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
    <div className='Search'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="ingredients">Enter ingredients (comma-separated):</label><br />
        <input
          className="searchBar"
          type="text"
          id="ingredients"
          name="ingredients"
          value={ingredients}
          placeholder='Apple, sugar, Flour'
          onChange={(e) => setIngredients(e.target.value)}
        />
      </form>
    </div>
  );
}

export default RecipeSearch;
