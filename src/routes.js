
import { HomePage } from "./pages/home-page";
import { Confectionery } from "./pages/confectionery";
import { Patisserie } from "./pages/patisserie";
import { Recipe } from "./pages/recipe";
import { Cases } from "./pages/cases";

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
];

export default routes;

{/* <Routes>
  <Route path="/" element={<Dashboard />}>
    <Route
      path="messages"
      element={<DashboardMessages />}
    />
    <Route path="tasks" element={<DashboardTasks />} />
  </Route>
  <Route path="about" element={<AboutPage />} />
</Routes> */}