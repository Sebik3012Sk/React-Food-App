import React from 'react'
import { useState , useEffect } from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import bg_image from "../images/bg-image.jpg";

const AllRecipes = () => {

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
    <div style={{background : `url(${bg_image})`,width : "100%",height : "100%",backgroundRepeat : "no-repeat",backgroundAttachment : "fixed",backgroundPosition : "center"}} className="h-full w-full">
        <NavBar />
        
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

export default AllRecipes;