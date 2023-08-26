import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const OneRecipe = () => {
  const { recipe_id } = useParams();
  const [dataRecipe, setDataRecipe] = useState([]);
  const [specificRecipe, setSpecificRecipe] = useState(null);

  useEffect(() => {
    const getDataApi = async () => {
      try {
        const url = `http://localhost:8080/api-data`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Chyba při načítání dat');
        }

        const data = await response.json();
        setDataRecipe(data);
      } catch (error) {
        console.error(error);
      }
    };

    getDataApi();
  }, [recipe_id]);

  
  useEffect(() => {
    const specificRecipeId = dataRecipe.find((oneRecipe) => {
      return oneRecipe.id === parseInt(recipe_id);
    });
    setSpecificRecipe(specificRecipeId);
  }, [dataRecipe, recipe_id]);

  if (!specificRecipe) {
    return <p>Načítání receptu...</p>;
  }

  return (
    <div>
      <img src={specificRecipe.image} alt="" />
      <h1>{specificRecipe.title}</h1>
      <p>{specificRecipe.recipe_text}</p>
    </div>
  );
};

export default OneRecipe;