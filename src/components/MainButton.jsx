import React from 'react'

const MainButton = ({buttonText,id}) => {

    const buttonToAllRecipes = () => {
      window.location.assign("/all-recipes");
    }

    if(id === 1) {
      return (
        <div className="">
          <button onClick={buttonToAllRecipes} className="border-2 border-white bg-red-800 text-white font-bold p-3 pl-5 pr-5 rounded-xl mt-32" type="button">{buttonText}</button>
        </div>
      )
    } else {
      return <div>

      </div>
    }

}

export default MainButton;