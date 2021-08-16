import React, { useEffect } from "react";
import moment from "moment";
import {
  Card,
  CardBody,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@windmill/react-ui";
import { Link, useParams } from "react-router-dom";
import SectionTitle from "../Typography/SectionTitle";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getUsuario } from "../../redux/actions/usuario";
import { getPublicacionTrabajo } from "../../redux/actions/publicacionTrabajo";
import { loadUser } from "../../redux/actions/auth";
import { getSolicitudTrabajo } from "../../redux/actions/solicitudTrabajo";

const DetalleInfo = (props) => {
  const {
    isAuthenticated,
    loading,
    usuario,
    getUsuario,
    loadUser,
    getPublicacionTrabajo,
    publicacionTrabajo,
    user,
    solicitudTrabajo,
    getSolicitudTrabajo,
  } = props;

  const idPublicacionTrabajo = useParams();

  useEffect(() => {
    loadUser().then(() => {
      getSolicitudTrabajo({
        idUsuario: user._id,
        idPublicacionTrabajo: idPublicacionTrabajo.id,
        idSolicitudTrabajo: null,
      });
    });
    getPublicacionTrabajo({
      idPublicacionTrabajo: idPublicacionTrabajo.id,
    });
  }, []);

  const dataTable = [
    {
      name: "Titulo",
      value: publicacionTrabajo.titulo,
    },
    {
      name: "Empresa",
      value: publicacionTrabajo._empresa
        ? publicacionTrabajo._empresa.nombreInfo.nombre +
          " " +
          publicacionTrabajo._empresa.nombreInfo.apellidoPadre
        : "",
      id: publicacionTrabajo._empresa
        ? publicacionTrabajo._empresa.usuarioInfo._id
        : "",
    },
    {
      name: "Telefono Empresa",
      value: publicacionTrabajo._empresa
        ? publicacionTrabajo._empresa.telefonoInfo.descripcion
        : "",
    },
    {
      name: "Email Empresa",
      value: publicacionTrabajo._empresa
        ? publicacionTrabajo._empresa.usuarioInfo.email
        : "",
    },
    {
      name: "Categoria Trabajo",
      value: publicacionTrabajo._categoriaTrabajo
        ? publicacionTrabajo._categoriaTrabajo.descripcion
        : "",
    },
    {
      name: "Posicion",
      value: publicacionTrabajo.posicion,
    },
    {
      name: "Tipo Contrato",
      value: publicacionTrabajo.tipoContrato,
    },
    {
      name: "Responsabilidad",
      value: publicacionTrabajo.responsabilidad,
    },
    {
      name: "Requerimientos",
      value: publicacionTrabajo.requerimientos,
    },
    {
      name: "Lenguaje",
      value: publicacionTrabajo.lenguaje,
    },
    {
      name: "Nivel Formacion",
      value: publicacionTrabajo._nivelCarrera
        ? publicacionTrabajo._nivelCarrera.descripcion
        : "",
    },
    {
      name: "Experiencia Minimo",
      value: publicacionTrabajo.experienciaTrabajo,
    },
    {
      name: "Cantidad Personas",
      value: publicacionTrabajo.cantidadPersonas,
    },
    {
      name: "Fecha Expiracion de la publicacion",
      value: publicacionTrabajo.fechaFinal,
    },
  ];

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
          <Card className="mb-8 shadow-md">
            <CardBody>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <SectionTitle>Informacion del trabajo</SectionTitle>
                <TableContainer className="mb-8">
                  <Table>
                    <TableBody>
                      {dataTable.map((data) =>
                        data.value ? (
                          <TableRow>
                            <TableCell className="w-1/3">
                              <span className="text-sm">{data.name}</span>
                            </TableCell>
                            <TableCell className="w-1/2">
                              {" "}
                              <span className="text-sm overflow-hidden">
                                {data.name === "Empresa" ? (
                                  <a
                                    className="text-green-400"
                                    href={"../../app/profile/" + data.id}
                                  >
                                    {data.value}
                                  </a>
                                ) : (
                                  data.value
                                )}
                              </span>
                            </TableCell>
                          </TableRow>
                        ) : null
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </p>
            </CardBody>
          </Card>

          <Card className="mb-8">
            <CardBody>
              <SectionTitle>Descripcion del trabajo</SectionTitle>
              <p className="text-gray-600 dark:text-gray-400">
                {publicacionTrabajo.descripcion}
              </p>

              {solicitudTrabajo?.[0] ||
              user.tipoUsuario === "empresa" ? null : (
                <div className="mt-4 px-4 py-3 text-center sm:px-6">
                  <Link
                    to={"../../app/EnviarPropuesta/" + publicacionTrabajo._id}
                  >
                    <Button>Enviar Propuesta</Button>
                  </Link>
                </div>
              )}
              {/* Si es la empresa que publica el post se vea automaticamente la lista de solicitud*/}
              {user._empresa !== publicacionTrabajo._empresa._id ? null : (
                <div className="mt-4 px-4 py-3 text-center sm:px-6">
                  <Link
                    to={"../../app/listaSolicitud/" + publicacionTrabajo._id}
                  >
                    <Button>Ver Todos los Solicitud de Trabajo</Button>
                  </Link>
                </div>
              )}
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
  solicitudTrabajo: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  user: state.auth.user,
  usuario: state.usuario.usuario,
  publicacionTrabajo: state.publicacionTrabajo.publicacionTrabajo,
  solicitudTrabajo: state.solicitudTrabajo.solicitudTrabajo,
});

const mapDispatchToProps = {
  getUsuario,
  getPublicacionTrabajo,
  loadUser,
  getSolicitudTrabajo,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetalleInfo);
