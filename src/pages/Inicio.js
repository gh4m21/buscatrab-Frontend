import React, { useEffect, useState } from "react";

import PageTitle from "../components/Typography/PageTitle";
//redux
import { loadUser } from "../redux/actions/auth";
import { getUsuario, getAllUsuario } from "../redux/actions/usuario";
import { getAllPublicacionTrabajo } from "../redux/actions/publicacionTrabajo";
import { getAllSolicitudTrabajo } from "../redux/actions/solicitudTrabajo";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { HalfCircleSpinner } from "react-epic-spinners";
import { Redirect } from "react-router-dom";
import Estadistica from "../components/Cards/Estadistica";

const Inicio = (props) => {
  const {
    isAuthenticated,
    loading,
    loadUser,
    getUsuario,
    usuario,
    user,
    getAllPublicacionTrabajo,
    getAllSolicitudTrabajo,
    getAllUsuario,
    publicacionTrabajo,
    solicitudTrabajo,
  } = props;

  const [countUser, setCountUser] = useState([]);
  const [countSolicitud, setCountSolicitud] = useState([]);
  const [countTrabajo, setCountTrabajo] = useState([]);

  useEffect(() => {
    getUsuario().then((usuario) => {
      loadUser();
    });
  }, []);
  return (
    <>
      {isAuthenticated && !loading && usuario && user ? (
        <>
          {!usuario._empresa && !usuario._desempleo ? (
            <Redirect to="./editprofile" />
          ) : null}
          <PageTitle>Inicio</PageTitle>
          <Estadistica usuario={usuario} />
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

Inicio.prototype = {
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  usuario: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  usuario: state.usuario.usuario,
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

const mapDispatchToProps = {
  loadUser,
  getUsuario,
  getAllPublicacionTrabajo,
  getAllSolicitudTrabajo,
  getAllUsuario,
};

export default connect(mapStateToProps, mapDispatchToProps)(Inicio);
