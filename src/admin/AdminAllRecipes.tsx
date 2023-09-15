import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface PromiseData {
  id: number;
  image: string;
  title: string;
  recipe_text: string;
}

const AdminAllRecipes: FC = () => {
  const [apiData, setApiData] = useState<Array<PromiseData>>([]);

  const getDataApi = async (): Promise<Array<PromiseData> | any> => {
    const url = "http://localhost:8080/api-data";
    const response = await fetch(url);
    const data = await response.json();
    setApiData(data);
  };

  useEffect(() => {
    getDataApi();
  }, []);

  return (
    <div>
      <div className="">
        <div className="flex flex-row flex-wrap items-center justify-center">
          {apiData.map((recipe, index) => (
            <div
              className="w-96 h-full p-5 rounded-xl m-10 bg-slate-300"
              key={index}
            >
              <img
                className="w-72 h-64 rounded-xl"
                src={`http://localhost:8080/uploads/${recipe?.image}`}
                alt={recipe?.title}
              />
              <Link to={`/one-recipe/${recipe?.id}`}>
                <span>
                  <p className="text-2xl">{recipe?.title}</p>
                </span>
              </Link>
              <p>{recipe.recipe_text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminAllRecipes;
