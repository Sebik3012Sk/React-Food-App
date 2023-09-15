import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface PromiseData {
  id: number;
  title: string;
  image: string;
  recipe_text: string;
}

const OneRecipe: FC = () => {
  const [dataRecipe, setDataRecipe] = useState<Array<PromiseData>>([]);
  const { recipe_id } = useParams();

  const getDataApi = async (
    id: string | undefined
  ): Promise<Array<PromiseData> | any> => {
    try {
      const response = await fetch(
        `http://localhost:8080/api-data-single/${id}`
      );

      if (!response.ok) {
        throw new Error("Chyba při načítání dat");
      }

      const data = await response.json();
      setDataRecipe(data);
    } catch (error) {
      throw new Error("Chyba: " + error);
    }
  };

  useEffect(() => {
    getDataApi(recipe_id);
  }, [recipe_id]);

  return (
    <div className="bg-white rounded-lg shadow-md max-w-screen-md mx-auto mt-8 m-5 p-6">
      <img
        src={`http://localhost:8080/uploads/${dataRecipe[0]?.image}`}
        alt=""
        className="w-full rounded-md mb-4"
      />
      <h1 className="text-3xl font-semibold mb-4">{dataRecipe[0]?.title}</h1>
      <p className="text-gray-700 leading-relaxed">
        {dataRecipe[0]?.recipe_text}
      </p>
    </div>
  );
};

export default OneRecipe;
