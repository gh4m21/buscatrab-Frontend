import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Label,
  Select,
} from "@windmill/react-ui";
import { year } from "../../utils/data/year";
import { nivel } from "../../utils/data/nivel";
import { addFormacion } from "../../redux/actions/formacion";
import { getUsuario } from "../../redux/actions/usuario";

const AddFormacion = (props) => {
  const {
    isAuthenticated,
    loading,
    usuario,
    getUsuario,
    addFormacion,
  } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombreInstituto: "",
    carrera: "",
    fechaInicial: "",
    fechaFinal: "",
    nivel: "",
    descripcion: "",
  });
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addFormacion({
      nombreInstituto: formData.nombreInstituto,
      carrera: formData.carrera,
      fechaInicial: formData.fechaInicial,
      fechaFinal: formData.fechaFinal,
      nivel: formData.nivel,
      descripcion: formData.descripcion,
      idDesempleo: usuario._desempleo,
    }).then((formacion) => {
      getUsuario();
      setIsModalOpen(false);
    });
  };

  return (
    <>
      <div className="mt-4 px-4 py-3 text-right sm:px-6">
        <Button onClick={openModal}>Agregar</Button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <form onSubmit={onSubmit}>
          <ModalHeader>Agregar Formacion</ModalHeader>
          <ModalBody>
            {/*}Email,Telephone {*/}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <Label>
                <span>Nombre del instituto</span>
                <Input
                  className="mt-1"
                  placeholder=""
                  name="nombreInstituto"
                  value={formData.nombreInstituto}
                  onChange={onChange}
                  required
                />
              </Label>
              <Label>
                <span>carrera</span>
                <Input
                  className="mt-1 col-4"
                  placeholder=""
                  name="carrera"
                  value={formData.carrera}
                  onChange={onChange}
                />
              </Label>
            </div>

            {/*}Fecha inicial,fecha final {*/}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <Label>
                <span>Fecha Inicial</span>
                <Select
                  className="mt-1"
                  placeholder=""
                  name="fechaInicial"
                  value={formData.fechaInicial}
                  onChange={onChange}
                  required
                >
                  <option>Selecionar</option>
                  {year.map((data) => {
                    return <option value={data.value}>{data.value}</option>;
                  })}
                </Select>
              </Label>
              <Label>
                <span>Fecha Final</span>
                <Select
                  className="mt-1 col-4"
                  placeholder=""
                  name="fechaFinal"
                  value={formData.fechaFinal}
                  onChange={onChange}
                  required
                >
                  <option>Selecionar</option>
                  {year.map((data) => {
                    return <option value={data.value}>{data.value}</option>;
                  })}
                </Select>
              </Label>
            </div>

            {/*}Email,Telephone {*/}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <Label>
                <span>Nivel</span>
                <Select
                  className="mt-1"
                  placeholder=""
                  name="nivel"
                  value={formData.nivel}
                  onChange={onChange}
                  required
                >
                  <option>Selecionar</option>
                  {nivel.map((data) => {
                    return <option value={data.value}>{data.value}</option>;
                  })}
                </Select>
              </Label>
              <Label>
                <span>descripcion</span>
                <Select
                  className="mt-1 col-4"
                  placeholder=""
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={onChange}
                  required
                >
                  <option>Selecionar</option>
                  <option value="En curso">En Curso</option>
                  <option value="Terminado">Terminado</option>
                </Select>
              </Label>
            </div>
          </ModalBody>
          <ModalFooter>
            <div className="hidden sm:block">
              <Button layout="outline" onClick={closeModal}>
                Cancelar
              </Button>
            </div>
            <div className="hidden sm:block">
              <Button type="submit">Salvar</Button>
            </div>
            <div className="block w-full sm:hidden">
              <Button block size="large" layout="outline" onClick={closeModal}>
                Cancelar
              </Button>
            </div>
            <div className="block w-full sm:hidden">
              <Button type="submit" block size="large">
                Salvar
              </Button>
            </div>
          </ModalFooter>
        </form>
      </Modal>
    </>
  );
};

AddFormacion.prototype = {
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  usuario: PropTypes.object.isRequired,
  formacion: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  usuario: state.usuario.usuario,
  formacion: state.formacion.formacion,
});

const mapDispatchToProps = {
  addFormacion,
  getUsuario,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFormacion);
