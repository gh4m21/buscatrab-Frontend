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
import moment from "moment";
import { EditIcon } from "../../icons";
import { year } from "../../utils/data/year";
import { updateExperiencia } from "../../redux/actions/experiencia";
import { getUsuario } from "../../redux/actions/usuario";

const EditExperiencia = (props) => {
  const { isAuthenticated, loading, usuario, updateExperiencia, getUsuario } =
    props;

  const [formData, setFormData] = useState({
    empresa: usuario.empresa ? usuario.empresa : "",
    puesto: usuario.puesto ? usuario.puesto : "",
    fechaInicial: usuario.fechaInicial ? usuario.fechaInicial : "",
    fechaFinal: usuario.fechaFinal ? usuario.fechaFinal : "",
    isTrabajoActivo: usuario.isTrabajoActivo ? "si" : "no",
    descripcion: usuario.descripcion ? usuario.descripcion : "",
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
    updateExperiencia({
      empresa: formData.empresa,
      puesto: formData.puesto,
      fechaInicial: formData.fechaInicial,
      fechaFinal: formData.fechaFinal,
      isTrabajoActivo: formData.isTrabajoActivo,
      descripcion: formData.descripcion,
      idExperiencia: usuario._id,
    }).then((experiencia) => {
      getUsuario();
      setIsModalOpen(false);
    });
  };

  return (
    <>
      <Button onClick={openModal} layout="link" size="icon" aria-label="Edit">
        <EditIcon className="w-5 h-5" aria-hidden="true" />
      </Button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <form onSubmit={onSubmit}>
          <ModalHeader>Editar Experiencia</ModalHeader>
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
                  value={moment(formData.fechaInicial)
                    .add(1, "y")
                    .format("YYYY")
                    .toString()}
                  onChange={onChange}
                  required
                >
                  <option>Selecionar</option>
                  {year.map((data) => {
                    return <option value={data.value}>{data.value}</option>;
                  })}
                </Select>{" "}
              </Label>
              <Label>
                <span>Fecha Final</span>
                <Select
                  className="mt-1 col-4"
                  placeholder=""
                  name="fechaFinal"
                  value={moment(formData.fechaFinal)
                    .add(1, "y")
                    .format("YYYY")
                    .toString()}
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

EditExperiencia.prototype = {
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

const mapDispatchToProps = { updateExperiencia, getUsuario };

export default connect(mapStateToProps, mapDispatchToProps)(EditExperiencia);
