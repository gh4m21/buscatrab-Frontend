/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import EditFormacion from "../modal/EditFormacion";
import AddFormacion from "../modal/AddFormacion";

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
} from "@windmill/react-ui";

import { TrashIcon } from "../../icons";
import SectionTitle from "../Typography/SectionTitle";
import moment from "moment";

import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { deleteFormacion } from "../../redux/actions/formacion";
import { getUsuario } from "../../redux/actions/usuario";

const Formaciones = (props) => {
  const { isAuthenticated, loading, usuario, deleteFormacion } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const formacion = usuario._desempleo._formacion;

  const borrarFormacion = (idFormacion) => {
    deleteFormacion({
      idFormacion,
      idDesempleo: usuario._desempleo._id,
    }).then(() => {
      getUsuario();
    });
  };

  return (
    <>
      {/*}Formacion{*/}
      <Card className="mb-8 shadow-md">
        <CardBody>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <SectionTitle>Formaciones</SectionTitle>

            {/*}Profesion,estado matrimonial {*/}
            <TableContainer className="mb-8">
              <Table>
                <TableHeader>
                  <tr>
                    <TableCell>nombre Instituto</TableCell>
                    <TableCell>Nivel</TableCell>
                    <TableCell>descripcion</TableCell>
                    <TableCell>Fecha</TableCell>
                    <TableCell>Accion</TableCell>
                  </tr>
                </TableHeader>
                <TableBody>
                  {formacion.map((data) => {
                    return (
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center text-sm">
                            <div>
                              <p className="font-semibold">
                                {data.nombreInstituto}
                              </p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                {data.carrera}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">{data.nivel}</span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">{data.descripcion}</span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">
                            {moment(data.fechaInicial)
                              .add(1, "y")
                              .format("YYYY")
                              .toString()}
                            -
                            {moment(data.fechaFinal)
                              .add(1, "y")
                              .format("YYYY")
                              .toString()}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-4">
                            <EditFormacion usuario={data} />
                            <Button
                              onClick={() => borrarFormacion(data._id)}
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
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <AddFormacion usuario={usuario} />
          </p>
        </CardBody>
      </Card>
    </>
  );
};

Formaciones.prototype = {
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  usuario: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  usuario: state.usuario.usuario,
});

const mapDispatchToProps = { deleteFormacion, getUsuario };

export default connect(mapStateToProps, mapDispatchToProps)(Formaciones);
