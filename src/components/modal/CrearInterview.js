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
import { addInterview } from "../../redux/actions/interview";
import { getUsuario } from "../../redux/actions/usuario";

const CrearInterview = (props) => {
  const {
    isAuthenticated,
    loading,
    usuario,
    getUsuario,
    addInterview,
    solicitudTrabajo,
    publicacionTrabajo,
  } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fecha: "",
    hora: "",
    asignacionTo: "",
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
    addInterview({
      fecha: formData.fecha,
      hora: formData.hora,
      asignacionTo: formData.asignacionTo,
      idSolicitudTrabajo: solicitudTrabajo._id,
    }).then((formacion) => {
      window.location.reload();
      setIsModalOpen(false);
    });
  };

  return (
    <>
      <Button
        className="text-green-400 hover:text-green-700"
        layout="outlined"
        onClick={openModal}
      >
        Aceptar
      </Button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <form onSubmit={onSubmit}>
          <ModalHeader>Crear Interview</ModalHeader>
          <ModalBody>
            {/*}Email,Telephone {*/}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <Label>
                <span>Fecha</span>
                <Input
                  className="mt-1"
                  placeholder=""
                  name="fecha"
                  value={formData.fecha}
                  onChange={onChange}
                  required
                />
              </Label>
              <Label>
                <span>Hora</span>
                <Input
                  className="mt-1 col-4"
                  placeholder=""
                  name="hora"
                  value={formData.hora}
                  onChange={onChange}
                  required
                />
              </Label>
            </div>

            {/*}Fecha inicial,fecha final {*/}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <Label>
                <span>Nombre del Encargador</span>
                <Input
                  className="mt-1"
                  placeholder=""
                  name="asignacionTo"
                  value={formData.asignacionTo}
                  onChange={onChange}
                  required
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

CrearInterview.prototype = {
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  usuario: PropTypes.object.isRequired,
  solicitudTrabajo: PropTypes.object.isRequired,
  publicacionTrabajo: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  usuario: state.usuario.usuario,
  solicitudTrabajo: state.solicitudTrabajo.solicitudTrabajo,
  publicacionTrabajo: state.publicacionTrabajo.publicacionTrabajo,
});

const mapDispatchToProps = {
  addInterview,
  getUsuario,
};

export default connect(mapStateToProps, mapDispatchToProps)(CrearInterview);
