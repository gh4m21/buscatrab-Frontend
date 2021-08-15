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
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

const Lenguaje = (props) => {
  const { isAuthenticated, loading, usuario } = props;

  const lenguaje = usuario._desempleo._lenguaje;

  return (
    <>
      {/*}Formacion{*/}
      <Card className="mb-8 shadow-md">
        <CardBody>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <SectionTitle>Lenguaje</SectionTitle>

            {/*}Profesion,estado matrimonial {*/}
            <TableContainer className="mb-8">
              <Table>
                <TableHeader>
                  <tr>
                    <TableCell>Lenguaje</TableCell>
                    <TableCell>Nivel</TableCell>
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

Lenguaje.prototype = {
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Lenguaje);
