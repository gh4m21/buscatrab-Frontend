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
  Input,
} from "@windmill/react-ui";

const AddRedSocial = (props) => {
  const { isAuthenticated, loading } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="mt-4 px-4 py-3 text-right sm:px-6">
        <Button onClick={openModal}>Agregar</Button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalHeader>Agregar Red Social</ModalHeader>
        <ModalBody>
          {/*}Redes sociales y enlace {*/}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <Label>
              <span>Red Social</span>
              <Select className="mt-1" placeholder="" name="redSocial">
                <option value="Ingles">Twitter</option>
                <option value="Espanol">Linkedin</option>
              </Select>
            </Label>
            <Label>
              <span>Enlace</span>
              <Input className="mt-1 col-4" placeholder="" name="enlace" />
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
            <Button>Salvar</Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large" layout="outline" onClick={closeModal}>
              Cancelar
            </Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large">
              Acceptar
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </>
  );
};

AddRedSocial.prototype = {
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddRedSocial);
