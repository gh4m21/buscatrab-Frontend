import React, { useEffect } from "react";

import PageTitle from "../components/Typography/PageTitle";
//redux
import { loadUser } from "../redux/actions/auth";
import { getUsuario } from "../redux/actions/usuario";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { HalfCircleSpinner } from "react-epic-spinners";
import { Redirect } from "react-router-dom";
import TrabajoCreado from "../components/Cards/TrabajoCreado";
import { getAllPublicacionTrabajoByUserId } from "../redux/actions/publicacionTrabajo";

const ListaTrabajoCreado = (props) => {
  const {
    isAuthenticated,
    loading,
    loadUser,
    getUsuario,
    usuario,
    user,
    getAllPublicacionTrabajoByUserId,
    publicacionTrabajo,
  } = props;

  useEffect(() => {
    getUsuario().then((usuario) => {
      loadUser();
      getAllPublicacionTrabajoByUserId({
        idEmpresa: user?._empresa ? user._empresa : "",
      });
    });
  }, []);
  return (
    <>
      {isAuthenticated && !loading && usuario && user ? (
        <>
          {!usuario._empresa && !usuario._desempleo ? (
            <Redirect to="./editprofile" />
          ) : null}
          {!usuario._empresa ? <Redirect to="./listaTrabajo" /> : null}
          <PageTitle>Lista Trabajo Creado</PageTitle>
          <TrabajoCreado
            usuario={usuario}
            publicacionTrabajo={publicacionTrabajo}
          />
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

ListaTrabajoCreado.prototype = {
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  usuario: PropTypes.object.isRequired,
  publicacionTrabajo: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  usuario: state.usuario.usuario,
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  publicacionTrabajo: state.publicacionTrabajo.publicacionTrabajo,
});

const mapDispatchToProps = {
  loadUser,
  getUsuario,
  getAllPublicacionTrabajoByUserId,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListaTrabajoCreado);
