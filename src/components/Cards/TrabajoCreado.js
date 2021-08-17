import React, { useEffect } from "react";
import moment from "moment";
import { Card, CardBody, Button } from "@windmill/react-ui";
import { Link } from "react-router-dom";
import SectionTitle from "../Typography/SectionTitle";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getAllPublicacionTrabajoByUserId } from "../../redux/actions/publicacionTrabajo";
import { loadUser } from "../../redux/actions/auth";
import { getUsuario } from "../../redux/actions/usuario";

const TrabajoCreado = (props) => {
  const {
    isAuthenticated,
    loading,
    usuario,
    user,
    publicacionTrabajo,
    loadUser,
    getUsuario,
    getAllPublicacionTrabajoByUserId,
  } = props;

  useEffect(() => {
    getUsuario().then((usuario) => {
      loadUser();
      getAllPublicacionTrabajoByUserId(user._empresa);
    });
  }, []);

  return (
    <>
      {/*}Formacion{*/}
      {!Array.isArray(publicacionTrabajo)
        ? window.location.reload
        : publicacionTrabajo.map((data) => {
            return (
              <>
                <Card className="mb-4">
                  <CardBody>
                    <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                      {data.titulo}
                    </p>
                    <p className="text-gray-600 text-justify dark:text-gray-400">
                      {data.descripcion}
                    </p>
                    <div className="text-gray-600 grid grid-cols-4 mt-6 flex">
                      <span className="flex mr-4 leading-5 ml-1 dark:text-gray-500">
                        {moment(data.fechaCreacion).fromNow()}
                      </span>

                      <span className="flex mr-2">
                        <span className="leading-5 ml-1 dark:text-gray-500"></span>
                      </span>
                      <span className="flex mr-2">
                        <span className="leading-5 ml-1 dark:text-gray-500">
                          Santiago
                        </span>
                      </span>
                      <span className="flex mr-2">
                        <span className="leading-5 ml-1 dark:text-gray-500">
                          {data.salario}
                          {""}
                          {data._moneda.descripcion}
                          {"/"}
                          {data.periodoSalarial}
                        </span>
                      </span>
                    </div>
                    <div className="mt-4 px-4 py-3 text-right sm:px-6">
                      <Link to={"./verDetalleTrabajo/" + data._id}>
                        <Button>Ver Mas</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </>
            );
          })}
    </>
  );
};

TrabajoCreado.prototype = {
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  publicacionTrabajo: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  usuario: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  publicacionTrabajo: state.publicacionTrabajo.publicacionTrabajo,
  usuario: state.usuario.usuario,
  user: state.auth.user,
});

const mapDispatchToProps = {
  getAllPublicacionTrabajoByUserId,
  getUsuario,
  loadUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrabajoCreado);
