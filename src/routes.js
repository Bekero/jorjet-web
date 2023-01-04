
import { HomePage } from "./pages/home-page";
import { Confectionery } from "./cmps/confectionery";
import { Patisserie } from "./pages/patisserie";
import { Recipe } from "./pages/recipe";
import { Cases } from "./cmps/cases";
import { Collection } from "./pages/collection";
import { ProductDetails } from "./pages/product-details";

// Routes accesible from the main navigation (in AppHeader)
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
    path: "/cases",
    component: <Cases />,
  },
  {
    path: "/patisserie",
    component: <Patisserie />,
  },
  {
    path: "/recipe",
    component: <Recipe />,
  },
  {
    path: "/collection/:id",
    component: <ProductDetails />,
  },
  {
    path: "/collection",
    component: <Collection />,
  },
];

export default routes;