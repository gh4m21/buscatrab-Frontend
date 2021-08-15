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

const RedesSociales = (props) => {
  const { isAuthenticated, loading } = props;
  return (
    <>
      {/*}Formacion{*/}
      <Card className="mb-8 shadow-md">
        <CardBody>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <SectionTitle>Redes Sociales</SectionTitle>

            {/*}Profesion,estado matrimonial {*/}
            <TableContainer className="mb-8">
              <Table>
                <TableHeader>
                  <tr>
                    <TableCell>Redes Sociales</TableCell>
                    <TableCell>Enlace</TableCell>
                  </tr>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <span className="text-sm text-center">Twitter</span>
                    </TableCell>
                    <TableCell>
                      <a
                        href="https://twitter.com/_gh4m_"
                        className="text-green-400"
                        target="_blank"
                      >
                        https://twitter.com/_gh4m_
                      </a>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </p>
        </CardBody>
      </Card>
    </>
  );
};

RedesSociales.prototype = {
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RedesSociales);
