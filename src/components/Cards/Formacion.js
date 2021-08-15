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
import moment from "moment";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

const Formacion = (props) => {
  const { isAuthenticated, loading, usuario } = props;

  const formacion = usuario._desempleo._formacion;

  return (
    <>
      {/*}Formacion{*/}
      <Card className="mb-8 shadow-md">
        <CardBody>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <SectionTitle>Formacion</SectionTitle>

            {/*}Profesion,estado matrimonial {*/}
            <TableContainer className="mb-8">
              <Table>
                <TableHeader>
                  <tr>
                    <TableCell>nombre Instituto</TableCell>
                    <TableCell>Nivel</TableCell>
                    <TableCell>descripcion</TableCell>
                    <TableCell>Fecha</TableCell>
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

Formacion.prototype = {
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Formacion);
