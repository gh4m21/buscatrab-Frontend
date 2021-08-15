import React from "react";
//redux
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import {
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableContainer,
  Card,
  CardBody,
} from "@windmill/react-ui";
import SectionTitle from "../../components/Typography/SectionTitle";

const PerfileInfo = (props) => {
  const { usuario, user } = props;
  const dataTableDesempleo = [
    {
      name: "Tipo Usuario",
      value: usuario.tipoUsuario,
    },
    {
      name: "Telefono",
      value: usuario._telefono.descripcion,
    },
    {
      name: "Fecha de Nacimiento",
      value: usuario._desempleo ? usuario._desempleo.fechaNacimiento : "",
    },
    {
      name: "Lugar de Nacimiento",
      value: usuario._desempleo ? usuario._desempleo.lugarDeNacimiento : "",
    },
    {
      name: "Estado Matrimonial",
      value: usuario._desempleo ? usuario._desempleo.estadoMatrimonial : "",
    },
    {
      name: "profesion",
      value: usuario._desempleo ? usuario._desempleo.profesion : "",
    },
    {
      name: "Direccion",
      value:
        usuario._direccion.pais +
        ", " +
        usuario._direccion.region +
        ", " +
        usuario._direccion.ciudad +
        ", " +
        usuario._direccion.calle +
        ", " +
        usuario._direccion.codigoPostal,
    },
    {
      name: "Sitio Web",
      value: usuario.sitioWeb,
    },
  ];

  const dataTableEmpresa = [
    {
      name: "Tipo Usuario",
      value: usuario.tipoUsuario,
    },
    {
      name: "Telefono",
      value: usuario._telefono.descripcion,
    },
    {
      name: "Fecha de Fundacion",
      value: usuario._empresa ? usuario._empresa.fechaFundacion : "",
    },
    {
      name: "Categoria Empresa",
      value: usuario._empresa
        ? usuario._empresa._categoriaEmpresa.descripcion
        : "",
    },
    {
      name: "Direccion",
      value:
        usuario._direccion.pais +
        ", " +
        usuario._direccion.region +
        ", " +
        usuario._direccion.ciudad +
        ", " +
        usuario._direccion.calle +
        ", " +
        usuario._direccion.codigoPostal,
    },
    {
      name: "Sitio Web",
      value: usuario.sitioWeb,
    },
  ];

  return (
    <>
      {/*} Encabeza Perfile{*/}
      <Card className="mb-8 shadow-md">
        <CardBody>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <SectionTitle>Datos Personales</SectionTitle>
            <TableContainer className="mb-8">
              <Table className="table-auto">
                <TableBody>
                  {usuario.tipoUsuario === "desempleo"
                    ? dataTableDesempleo.map((data) =>
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
                      )
                    : dataTableEmpresa.map((data) =>
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
          </p>
        </CardBody>
      </Card>
    </>
  );
};

PerfileInfo.prototype = {
  user: PropTypes.object.isRequired,
  usuario: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  usuario: state.usuario.usuario,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PerfileInfo);
