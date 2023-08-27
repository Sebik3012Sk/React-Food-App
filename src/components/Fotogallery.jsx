import React, { useEffect, useState } from 'react';

const Fotogallery = () => {
  const [dataApi, setDataApi] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const getDataApi = async () => {
    const url = "http://localhost:8080/api-data";
    const response = await fetch(url);
    const data = await response.json();
    setDataApi(data);
  }

  useEffect(() => {
    getDataApi();
  }, []);

  const openImage = (index) => {
    setCurrentImageIndex(index);
  }

  const closeImage = () => {
    setCurrentImageIndex(null);
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? dataApi.length - 1 : prevIndex - 1
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === dataApi.length - 1 ? 0 : prevIndex + 1
    );
  }

  return (
    <div className="bg-gray-200 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dataApi.map((oneRecipe, index) => {
          return (
            <div key={index} className="rounded overflow-hidden shadow-md">
              <img
                className="w-full h-48 object-cover cursor-pointer transform hover:scale-105 transition-transform duration-300"
                src={oneRecipe.image}
                alt=""
                onClick={() => openImage(index)}
              />
              <div className="p-2 bg-white">
                <p className="text-gray-800 font-semibold">{oneRecipe.title}</p>
              </div>
            </div>
          )
        })}
      </div>

      {currentImageIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="relative bg-white p-4 shadow-lg rounded-lg text-center transition-opacity duration-300">
            <img
              className="w-full h-auto"
              src={dataApi[currentImageIndex].image}
              alt=""
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
  )
}

export default Fotogallery;