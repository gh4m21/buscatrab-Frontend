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
import { EditIcon } from "../../icons";
import { updateLenguaje } from "../../redux/actions/lenguaje";
import { getUsuario } from "../../redux/actions/usuario";
import { lenguajeData } from "../../utils/data/lenguajeData";

const EditLenguaje = (props) => {
  const { isAuthenticated, loading, usuario, updateLenguaje, getUsuario } =
    props;

  const [formData, setFormData] = useState({
    descripcion: usuario.descripcion ? usuario.descripcion : "",
    nivel: usuario.nivel ? usuario.nivel : "",
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
    updateLenguaje({
      descripcion: formData.descripcion,
      nivel: formData.nivel,
      idLenguaje: usuario._id,
    }).then((lenguaje) => {
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
          <ModalHeader>Editar Lenguaje</ModalHeader>
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

EditLenguaje.prototype = {
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

const mapDispatchToProps = { getUsuario, updateLenguaje };

export default connect(mapStateToProps, mapDispatchToProps)(EditLenguaje);
