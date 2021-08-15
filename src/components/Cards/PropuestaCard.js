import React, { useEffect } from "react";
import moment from "moment";
import { Card, CardBody, Button } from "@windmill/react-ui";
import { Link, useParams } from "react-router-dom";
import SectionTitle from "../Typography/SectionTitle";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getUsuario } from "../../redux/actions/usuario";
import { getPublicacionTrabajo } from "../../redux/actions/publicacionTrabajo";
import { loadUser } from "../../redux/actions/auth";
import { getCv } from "../../redux/actions/cv";

const DetalleInfo = (props) => {
  const {
    isAuthenticated,
    loading,
    usuario,
    getUsuario,
    loadUser,
    getPublicacionTrabajo,
    publicacionTrabajo,
    getCv,
    cv,
    user,
  } = props;

  const idPublicacionTrabajo = useParams();

  useEffect(() => {
    loadUser().then(() => {
      getCv({ idUsuario: user._id });
    });
    getPublicacionTrabajo({
      idPublicacionTrabajo: idPublicacionTrabajo.id,
    });
  }, []);

  return (
    <>
      {Array.isArray(publicacionTrabajo) ? (
        window.location.reload
      ) : (
        <>
          <Card className="mb-4">
            <CardBody>
              <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                {publicacionTrabajo.titulo}
              </p>
              <div className="text-gray-600 grid grid-cols-1 mt-6 flex">
                <span className="flex mr-4 leading-5 ml-1 dark:text-gray-500">
                  {publicacionTrabajo.descripcion}
                </span>
              </div>
              <div className="text-gray-600 grid grid-cols-4 mt-6 flex">
                <span className="flex mr-4 leading-5 ml-1 dark:text-gray-500">
                  {moment(publicacionTrabajo.fechaCreacion).fromNow()}
                </span>

                <span className="flex mr-2">
                  <span className="leading-5 ml-1 dark:text-gray-500">
                    {publicacionTrabajo._empresa.nombreInfo.nombre +
                      " " +
                      publicacionTrabajo._empresa.nombreInfo.apellidoPadre}
                  </span>
                </span>
                <span className="flex mr-2">
                  <span className="leading-5 ml-1 dark:text-gray-500">
                    Santiago
                  </span>
                </span>
                <span className="flex mr-2">
                  <span className="leading-5 ml-1 dark:text-gray-500">
                    {publicacionTrabajo.salario}{" "}
                    {" " + publicacionTrabajo._moneda.descripcion}
                    {"/"}
                    {publicacionTrabajo.periodoSalarial}
                  </span>
                </span>
              </div>
            </CardBody>
          </Card>
        </>
      )}
    </>
  );
};

DetalleInfo.prototype = {
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  publicacionTrabajo: PropTypes.object.isRequired,
  usuario: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  cv: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  user: state.auth.user,
  usuario: state.usuario.usuario,
  publicacionTrabajo: state.publicacionTrabajo.publicacionTrabajo,
  cv: state.cv.cv,
});

const mapDispatchToProps = {
  getUsuario,
  getPublicacionTrabajo,
  loadUser,
  getCv,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetalleInfo);
