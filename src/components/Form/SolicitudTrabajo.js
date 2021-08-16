import React, { useState, useEffect } from "react";

import {
  Card,
  CardBody,
  Button,
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableContainer,
  Badge,
} from "@windmill/react-ui";

import { TrashIcon } from "../../icons";
import SectionTitle from "../Typography/SectionTitle";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getUsuario } from "../../redux/actions/usuario";
import { getCv } from "../../redux/actions/cv";
import { loadUser } from "../../redux/actions/auth";
import { getPublicacionTrabajo } from "../../redux/actions/publicacionTrabajo";
import { getAllSolicitudTrabajo } from "../../redux/actions/solicitudTrabajo";
import { useParams } from "react-router-dom";

const SolicitudTrabajo = (props) => {
  const {
    isAuthenticated,
    loading,
    user,
    loadUser,
    usuario,
    publicacionTrabajo,
    solicitudTrabajo,
    getCv,
    cv,
    getUsuario,
    getPublicacionTrabajo,
    getAllSolicitudTrabajo,
  } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const idPublicacionTrabajo = useParams();
  const verMas = (idSolicitudTrabajo) => {
    window.location.href =
      "../../app/verDetalleSolicitud/" + idSolicitudTrabajo;
  };

  useEffect(() => {
    loadUser();
    getAllSolicitudTrabajo(idPublicacionTrabajo.id);
    getUsuario();
    loadUser();
  }, []);

  return (
    <>
      {/*}Formacion{*/}
      <Card className="mb-8 shadow-md">
        <CardBody>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {/*}Profesion,estado matrimonial {*/}
            <TableContainer className="mb-8">
              <Table>
                <TableHeader>
                  <tr>
                    <TableCell>Titulo</TableCell>
                    <TableCell>Nombre completo</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Telefono</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell>Accion</TableCell>
                  </tr>
                </TableHeader>
                <TableBody>
                  {solicitudTrabajo
                    ? solicitudTrabajo.map((data) => {
                        return (
                          <TableRow>
                            <TableCell>
                              <div className="flex items-center text-sm">
                                <div>
                                  <p className="font-semibold">
                                    <a
                                      className="text-green-400"
                                      href={
                                        "../../app/verdetalleTrabajo/" +
                                        data.publicacionTrabajoInfo._id
                                      }
                                    >
                                      {data.publicacionTrabajoInfo.titulo}
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <span className="text-sm">
                                <a
                                  className="text-green-400"
                                  href={
                                    "../../app/profile/" + data.usuarioInfo._id
                                  }
                                >
                                  {data.nombreInfo.nombre +
                                    " " +
                                    data.nombreInfo.apellidoMadre +
                                    " " +
                                    data.nombreInfo.apellidoPadre}
                                </a>
                              </span>
                            </TableCell>
                            <TableCell>
                              <span className="text-sm">
                                {data.usuarioInfo.email}
                              </span>
                            </TableCell>
                            <TableCell>
                              <span className="text-sm">
                                {data.telefonoInfo.descripcion}
                              </span>
                            </TableCell>
                            <TableCell>
                              <span className="text-sm">
                                <Badge
                                  type={
                                    data.isAceptado == null
                                      ? "warning"
                                      : data.isAceptado == false
                                      ? "danger"
                                      : "success"
                                  }
                                >
                                  {data.isAceptado == null
                                    ? "Necesita Accion"
                                    : data.isAceptado == false
                                    ? "Rechazado"
                                    : "Aceptado"}
                                </Badge>
                              </span>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-4">
                                <Button
                                  onClick={() => verMas(data._id)}
                                  layout="link"
                                  size="icon"
                                  aria-label="Delete"
                                >
                                  <TrashIcon
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                  />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      })
                    : null}
                </TableBody>
              </Table>
            </TableContainer>
          </p>
        </CardBody>
      </Card>
    </>
  );
};

SolicitudTrabajo.prototype = {
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  usuario: PropTypes.object.isRequired,
  solicitudTrabajo: PropTypes.object.isRequired,
  publicacionTrabajo: PropTypes.object.isRequired,
  cv: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  user: state.auth.user,
  usuario: state.usuario.usuario,
  solicitudTrabajo: state.solicitudTrabajo.solicitudTrabajo,
  publicacionTrabajo: state.publicacionTrabajo.publicacionTrabajo,
  cv: state.cv.cv,
});

const mapDispatchToProps = {
  getUsuario,
  getPublicacionTrabajo,
  getAllSolicitudTrabajo,
  loadUser,
  getCv,
};

export default connect(mapStateToProps, mapDispatchToProps)(SolicitudTrabajo);
