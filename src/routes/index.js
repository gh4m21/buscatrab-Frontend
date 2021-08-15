import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Forms = lazy(() => import("../pages/Forms"));
const Cards = lazy(() => import("../pages/Cards"));
const Charts = lazy(() => import("../pages/Charts"));
const Buttons = lazy(() => import("../pages/Buttons"));
const Modals = lazy(() => import("../pages/Modals"));
const Tables = lazy(() => import("../pages/Tables"));
const Page404 = lazy(() => import("../pages/404"));
const Blank = lazy(() => import("../pages/Blank"));
const Profile = lazy(() => import("../pages/Profile"));
const EditProfile = lazy(() => import("../pages/EditProfile"));
const ListaTrabajo = lazy(() => import("../pages/ListaTrabajo"));
const AgregarTrabajo = lazy(() => import("../pages/AgregarTrabajo"));
const VerDetalleTrabajo = lazy(() => import("../pages/VerDetalleTrabajo"));
const HistorialTrabajo = lazy(() => import("../pages/HistorialTrabajo"));
const EnviarPropuesta = lazy(() => import("../pages/EnviarPropuesta"));
const Interview = lazy(() => import("../pages/Interview"));
const Inicio = lazy(() => import("../pages/Inicio"));

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: "/dashboard", // the url
    component: Dashboard, // view rendered
  },
  {
    path: "/forms",
    component: Forms,
  },
  {
    path: "/cards",
    component: Cards,
  },
  {
    path: "/charts",
    component: Charts,
  },
  {
    path: "/buttons",
    component: Buttons,
  },
  {
    path: "/modals",
    component: Modals,
  },
  {
    path: "/tables",
    component: Tables,
  },
  {
    path: "/404",
    component: Page404,
  },
  {
    path: "/blank",
    component: Blank,
  },
  {
    path: "/profile/:id",
    component: Profile,
  },
  {
    path: "/editprofile",
    component: EditProfile,
  },
  {
    path: "/listaTrabajo",
    component: ListaTrabajo,
  },
  {
    path: "/verDetalleTrabajo/:id",
    component: VerDetalleTrabajo,
  },
  {
    path: "/historialTrabajo",
    component: HistorialTrabajo,
  },
  {
    path: "/inicio",
    component: Inicio,
  },
  {
    path: "/agregarTrabajo",
    component: AgregarTrabajo,
  },
  {
    path: "/EnviarPropuesta/:id",
    component: EnviarPropuesta,
  },
  {
    path: "/Interview/:id",
    component: Interview,
  },
];

export default routes;