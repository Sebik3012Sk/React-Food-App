import { FC, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

interface PromiseData {
  id: number;
  title: string;
  image: string;
  recipe_text: string;
}

const AllRecipes: FC = () => {
  const [apiData, setApiData] = useState<Array<PromiseData>>([]);

  const getRecipes = async (): Promise<Array<PromiseData> | any> => {
    const url = "http://localhost:8080/api-data";
    const response = await fetch(url);
    const data = await response.json();
    setApiData(data);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  console.log("data", apiData);

  return (
    <div className="bg-[url('/src/assets/bg-image.jpg')] w-full h-[550px] bg-no-repeat bg-fixed bg-top">
      <Navbar />
      <div className="flex flex-row flex-wrap items-center justify-center">
        {apiData.map((recipe, index) => (
          <div
            className="w-96 h-full p-5 rounded-xl m-10 bg-slate-300"
            key={index}
          >
            <img
              src={`http://localhost:8080/uploads/${recipe?.image}`}
              alt=""
            />
            <Link to={`/one-recipe/${recipe?.id}`}>
              <span>
                <p>{recipe?.title}</p>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;
