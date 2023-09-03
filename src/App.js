import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import MainFood from "./pages/MainFood";
import Deserts from "./pages/Deserts";
import AllRecipes from "./pages/AllRecipes";
import OneRecipe from "./pages/OneRecipe";
import AdminPage from "./admin/AdminPage";
import AddRecipe from "./admin/AddRecipe";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FotogalleryPage from "./pages/FotogalleryPage";


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
          <Route path="/fotogallery-page" element={ <FotogalleryPage /> } />
          <Route path="/admin-system/:password" element={ <AdminPage /> } />
          <Route path="/add-recipe" element={ <AddRecipe /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/login" element={ <Login /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;