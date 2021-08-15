import React, { useState, useEffect } from "react";
import EditLenguaje from "../modal/EditLenguaje";
import AddLenguaje from "../modal/AddLenguaje";

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

import { deleteLenguaje } from "../../redux/actions/lenguaje";
import { getUsuario } from "../../redux/actions/usuario";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

const Lenguajes = (props) => {
  const { isAuthenticated, loading, usuario, getUsuario, deleteLenguaje } =
    props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const lenguaje = usuario._desempleo._lenguaje;
  const borrarLenguaje = (idLenguaje) => {
    deleteLenguaje({
      idLenguaje,
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
            <SectionTitle>Lenguajes</SectionTitle>

            {/*}Profesion,estado matrimonial {*/}
            <TableContainer className="mb-8">
              <Table>
                <TableHeader>
                  <tr>
                    <TableCell>Lenguaje</TableCell>
                    <TableCell>Nivel</TableCell>
                    <TableCell>Accion</TableCell>
                  </tr>
                </TableHeader>
                <TableBody>
                  {lenguaje.map((data) => {
                    return (
                      <TableRow>
                        <TableCell>
                          <span className="text-sm text-center">
                            {data.descripcion}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Badge
                            type={
                              data.nivel === "Basico"
                                ? "warning"
                                : data.nivel === "Intermediario"
                                ? "primary"
                                : "success"
                            }
                          >
                            {data.nivel}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-4">
                            <EditLenguaje usuario={data} />
                            <Button
                              onClick={() => borrarLenguaje(data._id)}
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
            <AddLenguaje usuario={usuario} />
          </p>
        </CardBody>
      </Card>
    </>
  );
};

Lenguajes.prototype = {
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

const mapDispatchToProps = { getUsuario, deleteLenguaje };

export default connect(mapStateToProps, mapDispatchToProps)(Lenguajes);
