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
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600 text-lg">Načítání receptu...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md max-w-screen-md mx-auto mt-8 m-5 p-6">
      <img
        src={specificRecipe.image}
        alt=""
        className="w-full h-auto rounded-md mb-4"
      />
      <h1 className="text-3xl font-semibold mb-4">{specificRecipe.title}</h1>
      <p className="text-gray-700 leading-relaxed">{specificRecipe.recipe_text}</p>
    </div>
  );
};

export default OneRecipe;