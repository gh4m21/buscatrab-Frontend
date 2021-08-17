/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: "/app/inicio", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Inicio", // name that appear in Sidebar
  },
  {
    path: "/app/listaTrabajo", // the url
    icon: "ListIcon1", // the component being exported from icons/index.js
    name: "Lista Trabajo", // name that appear in Sidebar
  },
  {
    path: "/app/agregarTrabajo",
    icon: "AddIcon",
    name: "Crear Trabajo",
  },
  {
    path: "/app/listaSolicitudEnviado",
    icon: "ListIcon",
    name: "Lista Solicitud Enviado",
  },
  {
    path: "/app/listaTrabajoCreado",
    icon: "ListIcon1",
    name: "Lista Trabajo Creado",
  },
];

export default routes;
