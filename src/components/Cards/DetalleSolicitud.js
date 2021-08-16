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
import { getCv } from "../../redux/actions/cv";

const DetalleSolicitud = (props) => {
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
    cv,
    getCv,
  } = props;

  const idSolicitudTrabajo = useParams();
  useEffect(() => {
    getPublicacionTrabajo({
      idUsuario: user ? user._id : null,
      idPublicacionTrabajo: solicitudTrabajo
        ? solicitudTrabajo._publicacionTrabajo
        : null,
      idSolicitudTrabajo: null,
    });
    getCv({ idUsuario: solicitudTrabajo ? solicitudTrabajo._desempleo : null });
  }, []);

  const dataTable = [
    {
      name: "Titulo",
      value: publicacionTrabajo ? publicacionTrabajo.titulo : "",
    },
    {
      name: "Resumen(CV)",
      url: cv?.[0] ? cv[0].url : "",
      value: cv?.[0] ? cv[0].titulo : "",
    },
    {
      name: "Letra de Motivacion",
      value: solicitudTrabajo ? solicitudTrabajo.motivacion : "",
    },
  ];

  return (
    <>
      {Array.isArray(solicitudTrabajo) ? (
        window.location.reload
      ) : (
        <>
          <Card className="mb-8 shadow-md">
            <CardBody>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <SectionTitle>
                  Informacion del Solicitud de Trabajo
                </SectionTitle>
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
                                {data.name === "Resumen(CV)" ? (
                                  <a
                                    className="text-green-400"
                                    href={data.value}
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

                {solicitudTrabajo.isAceptado == null ? (
                  <div className="mt-4 px-4 py-3 text-center sm:px-6">
                    <Link
                      className="mr-5"
                      to={"../../app/interview/" + solicitudTrabajo._id}
                    >
                      <Button
                        className="text-green-400 hover:text-green-700"
                        layout="outlined"
                      >
                        Aceptar
                      </Button>
                    </Link>
                    <Button
                      className="ml-5 text-red-400 hover:text-red-700"
                      layout="outlined"
                      onClick={() => alert("rechazado")}
                    >
                      Rechazar
                    </Button>
                  </div>
                ) : null}
              </p>
            </CardBody>
          </Card>
        </>
      )}
    </>
  );
};

DetalleSolicitud.prototype = {
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  publicacionTrabajo: PropTypes.object.isRequired,
  usuario: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  solicitudTrabajo: PropTypes.object.isRequired,
  cv: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  user: state.auth.user,
  usuario: state.usuario.usuario,
  publicacionTrabajo: state.publicacionTrabajo.publicacionTrabajo,
  solicitudTrabajo: state.solicitudTrabajo.solicitudTrabajo,
  cv: state.cv.cv,
});

const mapDispatchToProps = {
  getUsuario,
  getPublicacionTrabajo,
  loadUser,
  getSolicitudTrabajo,
  getCv,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetalleSolicitud);
