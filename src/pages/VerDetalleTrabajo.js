import React, { useEffect } from "react";

import PageTitle from "../components/Typography/PageTitle";
//redux
import { loadUser } from "../redux/actions/auth";
import { getUsuario } from "../redux/actions/usuario";
import { getPublicacionTrabajo } from "../redux/actions/publicacionTrabajo";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { HalfCircleSpinner } from "react-epic-spinners";
import { Redirect, useParams } from "react-router-dom";
import DetalleInfo from "../components/Cards/DetalleInfo";

const VerDetalleTrabajo = (props) => {
  const {
    isAuthenticated,
    loading,
    loadUser,
    getUsuario,
    usuario,
    user,
    getPublicacionTrabajo,
    publicacionTrabajo,
  } = props;

  const idPublicacionTrabajo = useParams();
  useEffect(() => {
    loadUser();
    getPublicacionTrabajo({
      idPublicacionTrabajo: idPublicacionTrabajo.id,
    });
  }, []);
  return (
    <>
      {isAuthenticated && !loading && user && publicacionTrabajo ? (
        <>
          {!user._empresa && !user._desempleo ? (
            <Redirect to="./editprofile" />
          ) : null}
          <PageTitle>Detalle Trabajo</PageTitle>
          <DetalleInfo publicacionTrabajo={publicacionTrabajo} />
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

VerDetalleTrabajo.prototype = {
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
  getPublicacionTrabajo,
};

export default connect(mapStateToProps, mapDispatchToProps)(VerDetalleTrabajo);
