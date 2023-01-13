
import { HomePage } from "./pages/home-page";
import { Confectionery } from "./pages/confectionery";
import { Recipe } from "./pages/recipe";
import { ProductDetails } from "./pages/product-details";
import { RecipeDetails } from "./pages/recipe-details";

const routes = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/confectionery",
    component: <Confectionery />,
  },
  {
    path: "/recipe",
    component: <Recipe />,
  },
  {
    path: "/recipe/:id",
    component: <RecipeDetails />,
  },
  {
    path: "/confectionery/:id",
    component: <ProductDetails />,
  },
];

export default routes;