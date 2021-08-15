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
import { addExperiencia } from "../../redux/actions/experiencia";
import { getUsuario } from "../../redux/actions/usuario";

const AddExperiencia = (props) => {
  const { isAuthenticated, loading, usuario, getUsuario, addExperiencia } =
    props;
  const [formData, setFormData] = useState({
    puesto: "",
    fechaInicial: "",
    fechaFinal: "",
    empresa: "",
    descripcion: "",
    isTrabajoActivo: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    console.log(formData.isTrabajoActivo);
    addExperiencia({
      puesto: formData.puesto,
      fechaInicial: formData.fechaInicial,
      fechaFinal: formData.fechaFinal,
      empresa: formData.empresa,
      descripcion: formData.descripcion,
      isTrabajoActivo: formData.isTrabajoActivo,
      idDesempleo: usuario._desempleo,
    }).then((experiencia) => {
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
          <ModalHeader>Agregar Experiencia</ModalHeader>
          <ModalBody>
            {/*}Empresa,Puesto {*/}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <Label>
                <span>Nombre Empresa</span>
                <Input
                  className="mt-1"
                  placeholder=""
                  name="empresa"
                  value={formData.empresa}
                  onChange={onChange}
                  required
                />
              </Label>
              <Label>
                <span>Puesto</span>
                <Input
                  className="mt-1 col-4"
                  placeholder=""
                  name="puesto"
                  value={formData.puesto}
                  onChange={onChange}
                  required
                />
              </Label>
            </div>

            {/*}Fecha inicial y final {*/}
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

            {/*}Trabajo actual y descripcion {*/}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <Label>
                <span>Trabajo Actual</span>
                <Select
                  className="mt-1"
                  placeholder=""
                  name="isTrabajoActivo"
                  value={formData.isTrabajoActivo}
                  onChange={onChange}
                  required
                >
                  <option>Selecionar</option>
                  <option value="si">Si</option>
                  <option value="no">No</option>
                </Select>
              </Label>
              <Label>
                <span>descripcion(opcional)</span>
                <Input
                  className="mt-1 col-4"
                  placeholder=""
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={onChange}
                />
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

AddExperiencia.prototype = {
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

const mapDispatchToProps = { addExperiencia, getUsuario };

export default connect(mapStateToProps, mapDispatchToProps)(AddExperiencia);
