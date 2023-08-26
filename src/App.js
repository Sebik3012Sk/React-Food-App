import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import MainFood from "./pages/MainFood";
import Deserts from "./pages/Deserts";
import AllRecipes from "./pages/AllRecipes";
import OneRecipe from "./components/OneRecipe";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/main-food" element={ <MainFood /> } />
          <Route path="/deserts" element={ <Deserts /> } />
          <Route path="/all-recipes" element={ <AllRecipes /> } />
          <Route path="/one-recipe/:recipe_id" element={ <OneRecipe /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;