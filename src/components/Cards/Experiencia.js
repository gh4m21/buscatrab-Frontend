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
  Badge,
} from "@windmill/react-ui";

import SectionTitle from "../Typography/SectionTitle";
import moment from "moment";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

const Experiencia = (props) => {
  const { isAuthenticated, loading, usuario } = props;

  const experiencia = usuario._desempleo._experiencia;
  return (
    <>
      {/*}Formacion{*/}
      <Card className="mb-8 shadow-md">
        <CardBody>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <SectionTitle>Experiencia</SectionTitle>

            {/*}Profesion,estado matrimonial {*/}
            <TableContainer className="mb-8">
              <Table>
                <TableHeader>
                  <tr>
                    <TableCell>Empresa/Puesto</TableCell>
                    <TableCell>descripcion</TableCell>
                    <TableCell>Fecha</TableCell>
                    <TableCell>Trabajo actual</TableCell>
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

Experiencia.prototype = {
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Experiencia);
