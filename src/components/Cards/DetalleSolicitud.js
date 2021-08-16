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
import CrearInterview from "../modal/CrearInterview";
import { getInterview } from "../../redux/actions/interview";

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
    interview,
    getInterview,
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
    getInterview({ idInterview: solicitudTrabajo._interview });
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

  const dataTableInterview = [
    {
      name: "Fecha",
      value: interview ? interview.fecha : "",
    },
    {
      name: "Hora",
      value: interview ? interview.hora : "",
    },
    {
      name: "Nombre del Encargador",
      value: interview ? interview.asignacionTo : "",
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
                                    href={data.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
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
                  <>
                    <div className="mt-4 px-4 py-3 text-center sm:px-6">
                      <CrearInterview solicitudTrabajo={solicitudTrabajo} />

                      <Button
                        className="ml-5 text-red-400 hover:text-red-700"
                        layout="outlined"
                        onClick={() => alert("rechazado")}
                      >
                        Rechazar
                      </Button>
                    </div>
                  </>
                ) : null}
              </p>
            </CardBody>
          </Card>

          {/** Parte del interview si se acepta el interview */}
          {solicitudTrabajo.isAceptado == true ? (
            <>
              <Card className="mb-8 shadow-md">
                <CardBody>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <SectionTitle>Informacion del Interview</SectionTitle>
                    <TableContainer className="mb-8">
                      <Table>
                        <TableBody>
                          {dataTableInterview.map((data) =>
                            data.value ? (
                              <TableRow>
                                <TableCell className="w-1/3">
                                  <span className="text-sm">{data.name}</span>
                                </TableCell>
                                <TableCell className="w-1/2">
                                  {" "}
                                  <span className="text-sm overflow-hidden">
                                    {data.value}
                                  </span>
                                </TableCell>
                              </TableRow>
                            ) : null
                          )}
                        </TableBody>
                      </Table>
                    </TableContainer>

                    {interview?.isAnulado == false ? (
                      <>
                        <div className="mt-4 px-4 py-3 text-center sm:px-6">
                          <Button
                            className="ml-5 text-red-400 hover:text-red-700"
                            layout="outlined"
                            onClick={() => alert("rechazado")}
                          >
                            Cancelar
                          </Button>
                        </div>
                      </>
                    ) : null}
                  </p>
                </CardBody>
              </Card>
            </>
          ) : null}
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
  interview: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  user: state.auth.user,
  usuario: state.usuario.usuario,
  publicacionTrabajo: state.publicacionTrabajo.publicacionTrabajo,
  solicitudTrabajo: state.solicitudTrabajo.solicitudTrabajo,
  cv: state.cv.cv,
  interview: state.interview.interview,
});

const mapDispatchToProps = {
  getUsuario,
  getPublicacionTrabajo,
  loadUser,
  getSolicitudTrabajo,
  getCv,
  getInterview,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetalleSolicitud);
