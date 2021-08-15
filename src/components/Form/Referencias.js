import React, { useState, useEffect } from "react";
import EditReferencia from "../modal/EditReferencia";
import AddReferencia from "../modal/AddReferencia";

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
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { deleteReferencia } from "../../redux/actions/referencia";
import { getUsuario } from "../../redux/actions/usuario";

const Referencias = (props) => {
  const { isAuthenticated, loading, usuario, getUsuario, deleteReferencia } =
    props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const referencia = usuario._desempleo._referencias;
  const borrarReferencia = (idReferencia) => {
    deleteReferencia({
      idReferencia,
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
            <SectionTitle>Referencias</SectionTitle>

            {/*}Profesion,estado matrimonial {*/}
            <TableContainer className="mb-8">
              <Table>
                <TableHeader>
                  <tr>
                    <TableCell>Nombre Completo/Empresa</TableCell>
                    <TableCell>Telefono</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Notas</TableCell>
                    <TableCell>Accion</TableCell>
                  </tr>
                </TableHeader>
                <TableBody>
                  {referencia.map((data) => {
                    return (
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center text-sm">
                            <div>
                              <p className="font-semibold">{data.nombre}</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                {data.empresa}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">{data.telefono}</span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">{data.email}</span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">{data.descripcion}</span>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-4">
                            <EditReferencia usuario={data} />
                            <Button
                              onClick={() => borrarReferencia(data._id)}
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
            <AddReferencia usuario={usuario} />
          </p>
        </CardBody>
      </Card>
    </>
  );
};

Referencias.prototype = {
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

const mapDispatchToProps = { getUsuario, deleteReferencia };

export default connect(mapStateToProps, mapDispatchToProps)(Referencias);
