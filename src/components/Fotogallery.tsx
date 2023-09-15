import { FC, useEffect, useState } from "react";

interface PromiseData {
  id: number;
  title: string;
  image: string;
  recipe_text: string;
}

const Fotogallery: FC = () => {
  const [dataApi, setDataApi] = useState<Array<PromiseData>>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );

  const getDataApi = async (): Promise<Array<PromiseData> | any> => {
    const url = "http://localhost:8080/api-data";
    const response = await fetch(url);
    const data = await response.json();
    setDataApi(data);
  };

  useEffect(() => {
    getDataApi();
  }, []);

  const openImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const closeImage = () => {
    setCurrentImageIndex(null);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (
        prevIndex: any // IDK WHY ANY ＼（〇_ｏ）／
      ) => (prevIndex === 0 ? dataApi.length - 1 : prevIndex - 1)
    );
  };

  const nextImage = () => {
    setCurrentImageIndex(
      (
        prevIndex: any // IDK WHY ANY ＼（〇_ｏ）／
      ) => (prevIndex === dataApi.length - 1 ? 0 : prevIndex + 1)
    );
  };

  return (
    <div className="bg-gray-200 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dataApi.map((oneRecipe, index) => (
          <div className="rounded overflow-hidden shadow-md" key={index}>
            <img
              className="w-full h-48 object-cover cursor-pointer transform hover:scale-105 transition-transform duration-300"
              src={`http://localhost:8080/uploads/${oneRecipe.image}`}
              alt={oneRecipe.title}
              onClick={() => openImage(index)}
            />
            <div className="p-2 bg-white">
              <p className="text-gray-800 font-semibold">{oneRecipe.title}</p>
            </div>
          </div>
        ))}
      </div>

      {currentImageIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="relative bg-white p-4 shadow-lg rounded-lg text-center transition-opacity duration-300">
            <img
              className="w-full h-auto"
              src={`http://localhost:8080/uploads/${dataApi[currentImageIndex].image}`}
              alt={dataApi[currentImageIndex].title}
            />
            <div className="mt-4">
              <button
                className="px-4 py-2 bg-gray-700 text-white rounded-full mr-2 transform hover:scale-105 transition-transform duration-300"
                onClick={prevImage}
              >
                Předchozí
              </button>
              <button
                className="px-4 py-2 bg-gray-700 text-white rounded-full mr-2 transform hover:scale-105 transition-transform duration-300"
                onClick={nextImage}
              >
                Další
              </button>
              <button
                className="px-4 py-2 bg-gray-700 text-white rounded-full transform hover:scale-105 transition-transform duration-300"
                onClick={closeImage}
              >
                Zavřít
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fotogallery;
