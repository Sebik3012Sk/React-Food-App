import React from 'react'
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';


const AdminAllRecipes = () => {

  const [data_api ,setDataApi] = useState([]);  

  const getDataApi = async () => {
    const url = "http://localhost:8080/api-data";
    const response = await fetch(url);
    const data = await response.json();
    setDataApi(data);
  }  

  useEffect(() => {
    getDataApi();
  } , [])

  console.log(data_api);

  return (
    <div>
        
        <div className="">
            <div className="flex flex-row flex-wrap items-center justify-center">
                {
                    data_api.map((recipe , index) => {
                        return <div className="w-96 h-full p-5 rounded-xl m-10 bg-slate-300" key={index}>
                            <img className="w-72 h-64 rounded-xl" src={recipe.image} alt="" />
                            <Link to={`/one-recipe/${recipe.id}`}>
                                <span>
                                    <p className="text-2xl">{recipe.title}</p>
                                </span>
                            </Link>
                            <p>{recipe.recipe_text}</p>
                        </div>
                    })
                }    
            </div>    
        </div>

    </div>
  )
}

export default AdminAllRecipes;