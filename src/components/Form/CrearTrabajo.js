import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { loadUser } from "../../redux/actions/auth";
import {
  addPublicacionTrabajo,
  updatePublicacionTrabajo,
} from "../../redux/actions/publicacionTrabajo";
import {
  Card,
  CardBody,
  Input,
  Label,
  Select,
  Button,
  Textarea,
} from "@windmill/react-ui";
import SectionTitle from "../Typography/SectionTitle";
import { getUsuario } from "../../redux/actions/usuario";
import { getAllCategoriaTrabajo } from "../../redux/actions/categoriaTrabajo";
import { getAllMoneda } from "../../redux/actions/moneda";
import { getAllNivelCarrera } from "../../redux/actions/nivelCarrera";
import { experienciaTrabajo } from "../../utils/data/experienciaTrabajo";
import { lenguajeData } from "../../utils/data/lenguajeData";
import { tipoContrato } from "../../utils/data/tipoContrato";
import { periodoTiempo } from "../../utils/data/periodoTiempo";

const CrearTrabajo = (props) => {
  const {
    isAuthenticated,
    loading,
    loadUser,
    user,
    usuario,
    addPublicacionTrabajo,
    updatePublicacionTrabajo,
    publicacionTrabajo,
    getAllCategoriaTrabajo,
    getAllMoneda,
    getAllNivelCarrera,
    moneda,
    categoriaTrabajo,
    nivelCarrera,
  } = props;
  const [formData, setFormData] = useState({
    titulo: publicacionTrabajo?.titulo ? publicacionTrabajo.titulo : "",
    posicion: publicacionTrabajo?.posicion ? publicacionTrabajo.posicion : "",
    _categoriaTrabajo: publicacionTrabajo?._categoriaTrabajo
      ? publicacionTrabajo._categoriaTrabajo._id
      : "",
    descripcion: publicacionTrabajo?.descripcion
      ? publicacionTrabajo.descripcion
      : "",
    tipoContrato: publicacionTrabajo?.tipoContrato
      ? publicacionTrabajo.tipoContrato
      : "",
    responsabilidad: publicacionTrabajo?.responsabilidad
      ? publicacionTrabajo.responsabilidad
      : "",
    requerimientos: publicacionTrabajo?.requerimientos
      ? publicacionTrabajo.requerimientos
      : "",
    _nivelCarrera: publicacionTrabajo?._nivelCarrera
      ? publicacionTrabajo._nivelCarrera._id
      : "",
    experienciaTrabajo: publicacionTrabajo?.experienciaTrabajo
      ? publicacionTrabajo.experienciaTrabajo
      : "",
    lenguaje: publicacionTrabajo?.lenguaje ? publicacionTrabajo.lenguaje : "",
    salario: publicacionTrabajo?.salario ? publicacionTrabajo.salario : "",
    _moneda: publicacionTrabajo?._moneda ? publicacionTrabajo._moneda._id : "",
    periodoSalarial: publicacionTrabajo?.periodoSalarial
      ? publicacionTrabajo.periodoSalarial
      : "",
    cantidadSalarial: publicacionTrabajo?.cantidadSalarial
      ? publicacionTrabajo.cantidadSalarial
      : "",
    cantidadPersonas: publicacionTrabajo?.cantidadPersonas
      ? publicacionTrabajo.cantidadPersonas
      : "",
    fechaInicial: publicacionTrabajo?.fechaInicial
      ? publicacionTrabajo.fechaInicial
      : "",
    fechaFinal: publicacionTrabajo?.fechaFinal
      ? publicacionTrabajo.fechaFinal
      : "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const crearPublicacionTrabajo = () => {
    addPublicacionTrabajo({
      titulo: formData.titulo,
      _empresa: usuario._empresa,
      posicion: formData.posicion,
      _categoriaTrabajo: formData._categoriaTrabajo,
      descripcion: formData.descripcion,
      tipoContrato: formData.tipoContrato,
      responsabilidad: formData.responsabilidad,
      requerimientos: formData.requerimientos,
      _nivelCarrera: formData._nivelCarrera,
      experienciaTrabajo: formData.experienciaTrabajo,
      lenguaje: formData.lenguaje,
      salario: formData.salario,
      _moneda: formData._moneda,
      periodoSalarial: formData.periodoSalarial,
      cantidadPersonas: formData.cantidadPersonas,
      fechaInicial: formData.fechaInicial,
      fechaFinal: formData.fechaFinal,
    });
  };

  const editPublicacionTrabajo = () => {
    updatePublicacionTrabajo({
      titulo: formData.titulo,
      _empresa: usuario._empresa,
      posicion: formData.posicion,
      _categoriaTrabajo: formData._categoriaTrabajo,
      descripcion: formData.descripcion,
      tipoContrato: formData.tipoContrato,
      responsabilidad: formData.responsabilidad,
      requerimientos: formData.requerimientos,
      _nivelCarrera: formData._nivelCarrera,
      experienciaTrabajo: formData.experienciaTrabajo,
      lenguaje: formData.lenguaje,
      salario: formData.salario,
      _moneda: formData._moneda,
      periodoSalarial: formData.periodoSalarial,
      cantidadPersonas: formData.cantidadPersonas,
      fechaInicial: formData.fechaInicial,
      fechaFinal: formData.fechaFinal,
      idPublicacionTrabajo: publicacionTrabajo._id,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (publicacionTrabajo) {
      editPublicacionTrabajo();
      window.location.reload();
    } else {
      crearPublicacionTrabajo();
      window.location.reload();
    }
  };

  useEffect(() => {
    getAllCategoriaTrabajo();
    getAllMoneda();
    getAllNivelCarrera();
  }, []);

  return (
    <>
      <Card className="mb-8 shadow-md">
        <CardBody>
          <form
            onSubmit={onSubmit}
            className="text-sm text-gray-600 dark:text-gray-400"
          >
            {/*}Titulo {*/}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Label>
                <span>Titulo</span>
                <Input
                  className="mt-1"
                  placeholder=""
                  name="titulo"
                  value={formData.titulo}
                  onChange={onChange}
                  required
                />
              </Label>
              <Label>
                <span>Puesto</span>
                <Input
                  className="mt-1 col-4"
                  placeholder=""
                  name="posicion"
                  value={formData.posicion}
                  onChange={onChange}
                />
              </Label>
              <Label>
                <span>Categoria Trabajo</span>
                <Select
                  className="mt-1"
                  placeholder=""
                  name="_categoriaTrabajo"
                  onChange={onChange}
                  value={formData._categoriaTrabajo}
                  required
                >
                  <option>Selecionar</option>
                  {categoriaTrabajo
                    ? categoriaTrabajo.map((data) => {
                        return (
                          <option value={data._id}>{data.descripcion}</option>
                        );
                      })
                    : null}
                </Select>
              </Label>
            </div>

            {/*}Email,Telephone {*/}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <Label>
                <span>Requerimientos</span>
                <Input
                  className="mt-1"
                  placeholder=""
                  name="requerimientos"
                  value={formData.requerimientos}
                  onChange={onChange}
                  required
                />
              </Label>
              <Label>
                <span>Responsabilidad</span>
                <Input
                  className="mt-1 col-4"
                  placeholder=""
                  name="responsabilidad"
                  value={formData.responsabilidad}
                  onChange={onChange}
                  required
                />
              </Label>
            </div>

            {/*}Fecha Nacimiento,Lugar Nacimiento {*/}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <Label>
                <span>Lenguaje</span>
                <Select
                  className="mt-1"
                  placeholder=""
                  name="lenguaje"
                  onChange={onChange}
                  value={formData.lenguaje}
                  required
                >
                  <option>Selecionar</option>
                  {lenguajeData.map((data) => {
                    return <option value={data.name}>{data.name}</option>;
                  })}
                </Select>
              </Label>
              <Label>
                <span>Experiencia Trabajo</span>
                <Select
                  className="mt-1"
                  placeholder=""
                  name="experienciaTrabajo"
                  onChange={onChange}
                  value={formData.experienciaTrabajo}
                  required
                >
                  <option>Selecionar</option>
                  {experienciaTrabajo.map((data) => {
                    return <option value={data.value}>{data.value}</option>;
                  })}
                </Select>
              </Label>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <Label>
                <span>Nivel Carrera</span>
                <Select
                  className="mt-1"
                  placeholder=""
                  name="_nivelCarrera"
                  onChange={onChange}
                  value={formData._nivelCarrera}
                  required
                >
                  <option>Selecionar</option>
                  {nivelCarrera
                    ? nivelCarrera.map((data) => {
                        return (
                          <option value={data._id}>{data.descripcion}</option>
                        );
                      })
                    : null}
                </Select>
              </Label>
              <Label>
                <span>Tipo de Contrato</span>
                <Select
                  className="mt-1"
                  placeholder=""
                  name="tipoContrato"
                  onChange={onChange}
                  value={formData.tipoContrato}
                  required
                >
                  <option>Selecionar</option>
                  {tipoContrato.map((data) => {
                    return <option value={data.value}>{data.value}</option>;
                  })}
                </Select>
              </Label>
            </div>

            {/*}Profesion,estado matrimonial {*/}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Label>
                <span>Salario</span>
                <Input
                  className="mt-1"
                  placeholder=""
                  name="salario"
                  value={formData.salario}
                  onChange={onChange}
                  required
                />
              </Label>
              <Label>
                <span>Moneda</span>
                <Select
                  className="mt-1"
                  placeholder=""
                  name="_moneda"
                  onChange={onChange}
                  value={formData._moneda}
                  required
                >
                  <option>Selecionar</option>
                  {moneda ? (
                    moneda.map((data) => {
                      return (
                        <option value={data._id}>{data.descripcion}</option>
                      );
                    })
                  ) : (
                    <p>No hay datos para mostrar</p>
                  )}
                </Select>
              </Label>
              <Label>
                <span>Periodo Salarial</span>
                <Select
                  className="mt-1"
                  placeholder=""
                  name="periodoSalarial"
                  onChange={onChange}
                  value={formData.periodoSalarial}
                  required
                >
                  <option>Selecionar</option>
                  {periodoTiempo.map((data) => {
                    return <option value={data.value}>{data.value}</option>;
                  })}
                </Select>
              </Label>
            </div>

            {/*}Direccion-Pais {*/}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <Label>
                <span>Cantidad Personas</span>
                <Input
                  className="mt-1 col-4"
                  placeholder=""
                  name="cantidadPersonas"
                  value={formData.cantidadPersonas}
                  onChange={onChange}
                  required
                />
              </Label>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <Label>
                <span>Fecha Inicial</span>
                <Input
                  className="mt-1"
                  placeholder=""
                  name="fechaInicial"
                  value={formData.fechaInicial}
                  onChange={onChange}
                  required
                />
              </Label>
              <Label>
                <span>Fecha Final</span>
                <Input
                  className="mt-1 col-4"
                  placeholder=""
                  name="fechaFinal"
                  value={formData.fechaFinal}
                  onChange={onChange}
                  required
                />
              </Label>
            </div>

            <div className="mt-4 grid grid-cols-1">
              <Label>
                <span>Descripcion</span>
                <Textarea
                  className="mt-1"
                  placeholder=""
                  name="descripcion"
                  onChange={onChange}
                  value={formData.descripcion}
                  required
                />
              </Label>
            </div>
            {/*}Button Salvar{*/}
            <div className="mt-4 px-4 py-3 text-right sm:px-6">
              <Button type="submit">Salvar</Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

CrearTrabajo.prototype = {
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  usuario: PropTypes.object.isRequired,
  publicacionTrabajo: PropTypes.object.isRequired,
  moneda: PropTypes.object.isRequired,
  categoriaTrabajo: PropTypes.object.isRequired,
  nivelCarrera: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  user: state.auth.user,
  usuario: state.usuario.usuario,
  publicacionTrabajo: state.publicacionTrabajo.publicacionTrabajo,
  moneda: state.moneda.moneda,
  categoriaTrabajo: state.categoriaTrabajo.categoriaTrabajo,
  nivelCarrera: state.nivelCarrera.nivelCarrera,
});

const mapDispatchToProps = {
  loadUser,
  updatePublicacionTrabajo,
  addPublicacionTrabajo,
  getAllCategoriaTrabajo,
  getAllMoneda,
  getAllNivelCarrera,
};

export default connect(mapStateToProps, mapDispatchToProps)(CrearTrabajo);
