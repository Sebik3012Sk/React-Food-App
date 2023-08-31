import React from 'react'
import { useState } from 'react';

const AddRecipe = () => {

  const [recipeTitle , setRecipeTitle] = useState("");
  const [image,setImage] = useState("");  
  const [foodCategory , setFoodCategory] = useState("");
  const [recipeText,setRecipeText] = useState("");

  const AddRecipeFormSubmit = () => {

    let data;

    if(foodCategory === "all-recipes") {
        data = {
            title : recipeTitle,
            image : image,
            recipe_text : recipeText
        }
    } else {
        console.log("Category Not Found");
    }

    
    const url = "http://localhost:8080/post-datadb"
    
    const response = fetch(url,{
        method : "post",
        headers : {
            "Accept" : "application/json",
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    }) .then((data) => {
        return console.log(data);
    })

    console.log(response);
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-slate-200 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Add a New Recipe</h2>
        <form onSubmit={AddRecipeFormSubmit} className="space-y-4">
            <div>
                <label htmlFor="title" className="block text-gray-600">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
                    placeholder="Enter the recipe title"
                    onChange={ (e) => setRecipeTitle(e.target.value) }
                />
            </div>

            <div>
                <label htmlFor="image" className="block text-gray-600">Image URL</label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
                    placeholder="Enter the image URL"
                    onChange={ (e) => setImage(e.target.value) }
                />
            </div>

            <div>
                <label htmlFor="category" className="block text-gray-600">Category</label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
                    placeholder="Enter Food Category"
                    onChange={ (e) => setFoodCategory(e.target.value) }
                />
            </div>

            <div>
                <label htmlFor="recipe-text" className="block text-gray-600 resize-none">Recipe Text</label>
                <textarea
                    id="recipe-text"
                    name="recipe-text"
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
                    rows="5"
                    placeholder="Enter the recipe text"
                    onChange={ (e) => setRecipeText(e.target.value) }
                ></textarea>
            </div>

            <div className="flex justify-end">
                <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue active:bg-red-600"
                >
                    Přidat Recept
                </button>
            </div>
        </form>
    </div>
  )
}

export default AddRecipe;