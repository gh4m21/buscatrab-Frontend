/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: "/app/dashboard", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Dashboard", // name that appear in Sidebar
  },
  {
    path: "/app/inicio", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Inicio", // name that appear in Sidebar
  },
  {
    path: "/app/listaTrabajo", // the url
    icon: "FormsIcon", // the component being exported from icons/index.js
    name: "Lista Trabajo", // name that appear in Sidebar
  },
  {
    path: "/app/agregarTrabajo",
    icon: "CardsIcon",
    name: "Crear Trabajo",
  },
  {
    icon: "PagesIcon",
    name: "Pages",
    routes: [
      // submenu
      {
        path: "/login",
        name: "Login",
      },
    ],
  },
];

export default routes;
