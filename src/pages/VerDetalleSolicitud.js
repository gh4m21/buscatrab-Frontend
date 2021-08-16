import React, { useEffect } from "react";

import PageTitle from "../components/Typography/PageTitle";
//redux

import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { HalfCircleSpinner } from "react-epic-spinners";
import { Redirect, useParams } from "react-router-dom";
import DetalleSolicitud from "../components/Cards/DetalleSolicitud";
import { loadUser } from "../redux/actions/auth";
import { getSolicitudTrabajo } from "../redux/actions/solicitudTrabajo";

const VerDetalleSolicitud = (props) => {
  const {
    isAuthenticated,
    loading,
    loadUser,
    getUsuario,
    usuario,
    user,
    getPublicacionTrabajo,
    publicacionTrabajo,
    getSolicitudTrabajo,
    getCv,
    cv,
    solicitudTrabajo,
  } = props;

  const idSolicitudTrabajo = useParams();
  useEffect(() => {
    loadUser();
    getSolicitudTrabajo({
      idSolicitudTrabajo: idSolicitudTrabajo.id,
    });
  }, []);

  return (
    <>
      {isAuthenticated && !loading && user && solicitudTrabajo ? (
        <>
          {!user._empresa && !user._desempleo ? (
            <Redirect to="./editprofile" />
          ) : null}
          <PageTitle>Ver Detalle Solicitud</PageTitle>
          <DetalleSolicitud solicitudTrabajo={solicitudTrabajo} />
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

VerDetalleSolicitud.prototype = {
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
  solicitudTrabajo: state.solicitudTrabajo.solicitudTrabajo,
  cv: state.cv.cv,
});

const mapDispatchToProps = { loadUser, getSolicitudTrabajo };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerDetalleSolicitud);
