import React, { useEffect } from "react";

import PageTitle from "../components/Typography/PageTitle";
import PerfileInfo from "../components/Cards/perfileInfo";
import DatosPersonales from "../components/Cards/DatosPersonales";
import Formacion from "../components/Cards/Formacion";
import Experiencia from "../components/Cards/Experiencia";
import Lenguaje from "../components/Cards/Lenguaje";
import Referencia from "../components/Cards/Referencia";
import RedesSociales from "../components/Cards/RedesSociales";
//redux
import { loadUser } from "../redux/actions/auth";
import { getUsuario } from "../redux/actions/usuario";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { HalfCircleSpinner } from "react-epic-spinners";
import { Redirect, useParams } from "react-router-dom";

const Profile = (props) => {
  const { isAuthenticated, loading, loadUser, getUsuario, usuario, user } =
    props;

  const idUsuario = useParams();

  console.log(idUsuario.id);

  useEffect(() => {
    getUsuario(idUsuario.id).then((usuario) => {
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
          <PageTitle>Perfile {usuario.tipoUsuario}</PageTitle>

          {usuario.tipoUsuario === "desempleo" ? (
            <>
              <PerfileInfo usuario={usuario} user={user} />

              <DatosPersonales usuario={usuario} user={user} />
              {/*}Formacion{*/}
              {usuario._desempleo._formacion?.length ? (
                <Formacion usuario={usuario} user={user} />
              ) : null}
              {/*Experiencia*/}
              {usuario._desempleo._experiencia?.length ? (
                <Experiencia usuario={usuario} user={user} />
              ) : null}
              {/*Lenguaje*/}
              {usuario._desempleo._lenguaje?.length ? (
                <Lenguaje usuario={usuario} user={user} />
              ) : null}
              {/*Referencia*/}
              {usuario._desempleo._referencias?.length ? (
                <Referencia usuario={usuario} user={user} />
              ) : null}
              {/*RedesSociales*/}
              {usuario.redesSociales?.length ? (
                <RedesSociales usuario={usuario} user={user} />
              ) : null}
            </>
          ) : (
            <>
              <PerfileInfo usuario={usuario} user={user} />
              <DatosPersonales usuario={usuario} user={user} />
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

Profile.prototype = {
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
