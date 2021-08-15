import React from "react";

import {
  Card,
  CardBody,
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableContainer,
} from "@windmill/react-ui";

import SectionTitle from "../Typography/SectionTitle";

import { connect } from "react-redux";
import { PropTypes } from "prop-types";

const Referencia = (props) => {
  const { isAuthenticated, loading, usuario } = props;
  const referencia = usuario._desempleo._referencias;
  return (
    <>
      {/*}Formacion{*/}
      <Card className="mb-8 shadow-md">
        <CardBody>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <SectionTitle>Referencia</SectionTitle>

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
                          <span className="text-sm">{data.notas}</span>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </p>
        </CardBody>
      </Card>
    </>
  );
};

Referencia.prototype = {
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Referencia);
