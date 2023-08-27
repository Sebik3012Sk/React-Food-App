import React from 'react'
import { useEffect , useState } from 'react';

const Fotogallery = () => {

  const [data_api , setDataApi] = useState([]);  

  const getDataApi = async () => {
    const url = "http://localhost:8080/api-data";
    const response = await fetch(url);
    const data = await response.json();
    setDataApi(data);
  }  

  useEffect(() => {
    getDataApi();
  } , [])


  return (
    <div>
        <div id="images" className="flex flex-row flex-wrap">
          {
            data_api.map((oneRecipe , index) => {
              return (
                <div key={index}>
                  <img className="w-64 h-48 m-10" src={oneRecipe.image} alt="" />
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Fotogallery;