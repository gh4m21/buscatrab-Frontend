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
} from "@windmill/react-ui";
import { addReferencia } from "../../redux/actions/referencia";
import { getUsuario } from "../../redux/actions/usuario";

const AddReferencia = (props) => {
  const { isAuthenticated, loading, usuario, getUsuario, addReferencia } =
    props;

  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    email: "",
    notas: "",
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
    addReferencia({
      nombre: formData.nombre,
      empresa: formData.empresa,
      telefono: formData.telefono,
      email: formData.email,
      notas: formData.notas,
      idDesempleo: usuario._desempleo,
    }).then((referencia) => {
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
          <ModalHeader>Agregar Referencia</ModalHeader>
          <ModalBody>
            {/*}Nombre y Empresa {*/}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <Label>
                <span>Nombre completo</span>
                <Input
                  className="mt-1"
                  placeholder=""
                  name="nombre"
                  value={formData.nombre}
                  onChange={onChange}
                  required
                />
              </Label>
              <Label>
                <span>Empresa</span>
                <Input
                  className="mt-1 col-4"
                  placeholder=""
                  name="empresa"
                  value={formData.empresa}
                  onChange={onChange}
                />
              </Label>
            </div>

            {/*}Email,Telephone {*/}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <Label>
                <span>Telefono</span>
                <Input
                  className="mt-1"
                  placeholder=""
                  name="telefono"
                  value={formData.telefono}
                  onChange={onChange}
                  required
                />
              </Label>
              <Label>
                <span>Email</span>
                <Input
                  className="mt-1 col-4"
                  placeholder=""
                  name="email"
                  value={formData.email}
                  onChange={onChange}
                />
              </Label>
            </div>

            {/*}Notas{*/}
            <div className="mt-4 grid grid-cols-1">
              <Label>
                <span>Notas(Opcional)</span>
                <Input
                  className="mt-1"
                  placeholder=""
                  name="notas"
                  value={formData.notas}
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

AddReferencia.prototype = {
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

const mapDispatchToProps = { getUsuario, addReferencia };

export default connect(mapStateToProps, mapDispatchToProps)(AddReferencia);
