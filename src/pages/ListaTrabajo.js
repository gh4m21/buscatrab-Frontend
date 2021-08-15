import React, { useEffect } from "react";

import PageTitle from "../components/Typography/PageTitle";
//redux
import { loadUser } from "../redux/actions/auth";
import { getUsuario } from "../redux/actions/usuario";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { HalfCircleSpinner } from "react-epic-spinners";
import { Redirect } from "react-router-dom";
import Trabajo from "../components/Cards/Trabajo";
import { getAllPublicacionTrabajo } from "../redux/actions/publicacionTrabajo";

const ListaTrabajo = (props) => {
  const {
    isAuthenticated,
    loading,
    loadUser,
    getUsuario,
    usuario,
    user,
    getAllPublicacionTrabajo,
    publicacionTrabajo,
  } = props;

  useEffect(() => {
    getUsuario().then((usuario) => {
      loadUser();
      getAllPublicacionTrabajo();
    });
  }, []);
  return (
    <>
      {isAuthenticated && !loading && usuario && user && publicacionTrabajo ? (
        <>
          {!usuario._empresa && !usuario._desempleo ? (
            <Redirect to="./editprofile" />
          ) : null}
          <PageTitle>Lista Trabajo</PageTitle>
          <Trabajo usuario={usuario} publicacionTrabajo={publicacionTrabajo} />
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

ListaTrabajo.prototype = {
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
  getAllPublicacionTrabajo,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListaTrabajo);
