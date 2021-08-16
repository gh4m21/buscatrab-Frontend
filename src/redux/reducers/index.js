import { combineReducers } from "redux";
import auth from "./auth";
import telephone from "./telephone";
import desempleo from "./desempleo";
import direccion from "./direccion";
import experiencia from "./experiencia";
import formacion from "./formacion";
import identificacion from "./identificacion";
import lenguaje from "./lenguaje";
import nombre from "./nombre";
import usuario from "./usuario";
import alert from "./alert";
import referencia from "./referencia";
import categoriaEmpresa from "./categoriaEmpresa";
import empresa from "./empresa";
import publicacionTrabajo from "./publicacionTrabajo";
import moneda from "./moneda";
import categoriaTrabajo from "./categoriaTrabajo";
import nivelCarrera from "./nivelCarrera";
import cv from "./cv";
import solicitudTrabajo from "./solicitudTrabajo";
import interview from "./interview";

export default combineReducers({
  auth,
  telephone,
  desempleo,
  formacion,
  identificacion,
  usuario,
  nombre,
  experiencia,
  direccion,
  lenguaje,
  alert,
  referencia,
  categoriaEmpresa,
  empresa,
  publicacionTrabajo,
  moneda,
  categoriaTrabajo,
  nivelCarrera,
  cv,
  solicitudTrabajo,
  interview,
});
