import React, { useState, useEffect } from "react";
//redux
import { loadUser } from "../redux/actions/auth";
import { getNombre } from "../redux/actions/nombre";
import { getDesempleo } from "../redux/actions/desempleo";
import { getExperiencia } from "../redux/actions/experiencia";
import { getDireccion } from "../redux/actions/direccion";
import { getFormacion } from "../redux/actions/formacion";
import { getIdentificacion } from "../redux/actions/identificacion";
import { getLenguaje } from "../redux/actions/lenguaje";
import { getTelephone } from "../redux/actions/telephone";
import { getUsuario } from "../redux/actions/usuario";
import { getAllCategoriaEmpresa } from "../redux/actions/categoriaEmpresa";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
//Components
import Formaciones from "../components/Form/Formaciones";
import DatosPersonalesD from "../components/Form/DatosPersonalesD";
import DatosPersonalesE from "../components/Form/DatosPersonalesE";
import InformacionProfile from "../components/Form/InformacionProfile";
import Experiencias from "../components/Form/Experiencias";
import Lenguajes from "../components/Form/Lenguajes";
import Referencias from "../components/Form/Referencias";
import RedesSociales from "../components/Form/RedesSociales";

import PageTitle from "../components/Typography/PageTitle";
import { HalfCircleSpinner } from "react-epic-spinners";

const EditProfile = (props) => {
  const {
    isAuthenticated,
    loading,
    loadUser,
    getUsuario,
    user,
    usuario,
    getAllCategoriaEmpresa,
    categoriaEmpresa,
  } = props;

  useEffect(() => {
    getUsuario().then((usuario) => {
      loadUser();
      getAllCategoriaEmpresa();
    });
  }, []);

  return (
    <>
      {isAuthenticated && usuario && !loading ? (
        <>
          <PageTitle>Editar Perfile</PageTitle>
          {user.tipoUsuario === "desempleo" ? (
            <>
              {!user._desempleo ? (
                <DatosPersonalesD usuario={usuario} />
              ) : (
                <>
                  <DatosPersonalesD usuario={usuario} />
                  <InformacionProfile usuario={usuario} />
                  <Formaciones usuario={usuario} />
                  <Experiencias usuario={usuario} />
                  <Lenguajes usuario={usuario} />
                  <Referencias usuario={usuario} />
                  {/*} <RedesSociales usuario={usuario} />{*/}
                </>
              )}
            </>
          ) : (
            <>
              <DatosPersonalesE
                usuario={usuario}
                categoriaEmpresa={categoriaEmpresa}
              />
              <InformacionProfile usuario={usuario} />
            </>
          )}
        </>
      ) : (
        <HalfCircleSpinner
          color="#1a56db"
          size="100"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            margin: "0 0 0 0",
          }}
        />
      )}
    </>
  );
};

EditProfile.prototype = {
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  nombre: PropTypes.object.isRequired,
  desempleo: PropTypes.object.isRequired,
  experiencia: PropTypes.object.isRequired,
  direccion: PropTypes.object.isRequired,
  formacion: PropTypes.object.isRequired,
  identificacion: PropTypes.object.isRequired,
  lenguaje: PropTypes.object.isRequired,
  telephone: PropTypes.object.isRequired,
  usuario: PropTypes.object.isRequired,
  categoriaEmpresa: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  user: state.auth.user,
  nombre: state.nombre.nombre,
  desempleo: state.desempleo.desempleo,
  experiencia: state.experiencia.experiencia,
  direccion: state.direccion.direccion,
  formacion: state.formacion.formacion,
  identificacion: state.identificacion.identificacion,
  lenguaje: state.lenguaje.lenguaje,
  telephone: state.telephone.telephone,
  usuario: state.usuario.usuario,
  categoriaEmpresa: state.categoriaEmpresa.categoriaEmpresa,
});

const mapDispatchToProps = {
  loadUser,
  getNombre,
  getDesempleo,
  getExperiencia,
  getDireccion,
  getFormacion,
  getIdentificacion,
  getLenguaje,
  getTelephone,
  getUsuario,
  getAllCategoriaEmpresa,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
