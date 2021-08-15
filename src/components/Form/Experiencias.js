import React, { useState, useEffect } from "react";
import EditExperiencia from "../modal/EditExperiencia";
import AddExperiencia from "../modal/AddExperiencia";

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
import moment from "moment";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { deleteExperiencia } from "../../redux/actions/experiencia";
import { getUsuario } from "../../redux/actions/usuario";

const Experiencias = (props) => {
  const { isAuthenticated, loading, usuario, getUsuario, deleteExperiencia } =
    props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const experiencia = usuario._desempleo._experiencia;
  const borrarExperiencia = (idExperiencia) => {
    deleteExperiencia({
      idExperiencia,
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
            <SectionTitle>Experiencias</SectionTitle>

            {/*}Profesion,estado matrimonial {*/}
            <TableContainer className="mb-8">
              <Table>
                <TableHeader>
                  <tr>
                    <TableCell>Empresa/Puesto</TableCell>
                    <TableCell>descripcion</TableCell>
                    <TableCell>Fecha</TableCell>
                    <TableCell>Trabajo actual</TableCell>
                    <TableCell>Accion</TableCell>
                  </tr>
                </TableHeader>
                <TableBody>
                  {experiencia.map((data) => {
                    return (
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center text-sm">
                            <div>
                              <p className="font-semibold">{data.empresa}</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                {data.puesto}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm text-center"></span>
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
                          <Badge
                            type={data.isTrabajoActivo ? "success" : "warning"}
                          >
                            {data.isTrabajoActivo ? "Si" : "No"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-4">
                            <EditExperiencia usuario={data} />
                            <Button
                              onClick={() => borrarExperiencia(data._id)}
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
            <AddExperiencia usuario={usuario} />
          </p>
        </CardBody>
      </Card>
    </>
  );
};

Experiencias.prototype = {
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  usuario: state.usuario.usuario,
});

const mapDispatchToProps = { getUsuario, deleteExperiencia };

export default connect(mapStateToProps, mapDispatchToProps)(Experiencias);
