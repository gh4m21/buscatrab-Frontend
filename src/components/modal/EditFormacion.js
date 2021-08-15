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
import { EditIcon } from "../../icons";
import moment from "moment";
import { year } from "../../utils/data/year";
import { nivel } from "../../utils/data/nivel";
import { updateFormacion } from "../../redux/actions/formacion";
import { getUsuario } from "../../redux/actions/usuario";

const EditFormacion = (props) => {
  const { isAuthenticated, loading, usuario, getUsuario, updateFormacion } =
    props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombreInstituto: usuario.nombreInstituto ? usuario.nombreInstituto : "",
    carrera: usuario.carrera ? usuario.carrera : "",
    fechaInicial: usuario.fechaInicial ? usuario.fechaInicial : "",
    fechaFinal: usuario.fechaFinal ? usuario.fechaFinal : "",
    nivel: usuario.nivel ? usuario.nivel : "",
    descripcion: usuario.descripcion ? usuario.descripcion : "",
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
    updateFormacion({
      nombreInstituto: formData.nombreInstituto,
      carrera: formData.carrera,
      fechaInicial: formData.fechaInicial,
      fechaFinal: formData.fechaFinal,
      nivel: formData.nivel,
      descripcion: formData.descripcion,
      idFormacion: usuario._id,
    }).then((formacion) => {
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
          <ModalHeader>Editar Formacion</ModalHeader>
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

            {/*}Email,Telephone {*/}
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
                  value={moment(formData.fechaFinal)
                    .add(1, "y")
                    .format("YYYY")
                    .toString()}
                  onChange={onChange}
                  required
                >
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

EditFormacion.prototype = {
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

const mapDispatchToProps = { updateFormacion, getUsuario };

export default connect(mapStateToProps, mapDispatchToProps)(EditFormacion);
