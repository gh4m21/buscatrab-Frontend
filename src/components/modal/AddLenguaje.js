import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Label,
  Select,
} from "@windmill/react-ui";
import { addLenguaje } from "../../redux/actions/lenguaje";
import { getUsuario } from "../../redux/actions/usuario";
import { lenguajeData } from "../../utils/data/lenguajeData";

const AddLenguaje = (props) => {
  const { isAuthenticated, loading, usuario, getUsuario, addLenguaje } = props;
  const [formData, setFormData] = useState({
    descripcion: "",
    nivel: "",
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
    addLenguaje({
      descripcion: formData.descripcion,
      nivel: formData.nivel,
      idDesempleo: usuario._desempleo,
    }).then((lenguaje) => {
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
          <ModalHeader>Agregar Lenguaje</ModalHeader>
          <ModalBody>
            {/*}Lenguaje y Nivel {*/}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <Label>
                <span>Lenguaje</span>
                <Select
                  className="mt-1"
                  placeholder=""
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={onChange}
                  required
                >
                  <option>Selecionar</option>
                  {lenguajeData.map((data) => {
                    return <option value={data.name}>{data.name}</option>;
                  })}
                </Select>
              </Label>
              <Label>
                <span>Nivel</span>
                <Select
                  className="mt-1 col-4"
                  placeholder=""
                  name="nivel"
                  value={formData.nivel}
                  onChange={onChange}
                  required
                >
                  <option>Selecionar</option>
                  <option value="Basico">Basico</option>
                  <option value="Intermediario">Intermediario</option>
                  <option value="Avanzado">Avanzado</option>
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

AddLenguaje.prototype = {
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

const mapDispatchToProps = { addLenguaje, getUsuario };

export default connect(mapStateToProps, mapDispatchToProps)(AddLenguaje);
