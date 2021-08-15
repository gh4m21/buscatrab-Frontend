import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { loadUser } from "../../redux/actions/auth";
import { addNombre, updateNombre } from "../../redux/actions/nombre";
import { addDesempleo, updateDesempleo } from "../../redux/actions/desempleo";
import { addDireccion, updateDireccion } from "../../redux/actions/direccion";
import {
  addIdentificacion,
  updateIdentificacion,
} from "../../redux/actions/identificacion";
import { addTelephone, updateTelephone } from "../../redux/actions/telephone";
import {
  Card,
  CardBody,
  Input,
  Label,
  Select,
  Button,
} from "@windmill/react-ui";
import SectionTitle from "../Typography/SectionTitle";
import { getUsuario } from "../../redux/actions/usuario";
import { pais } from "../../utils/data/pais";

const DatosPersonalesD = (props) => {
  const {
    isAuthenticated,
    loading,
    loadUser,
    addNombre,
    addDesempleo,
    addDireccion,
    addIdentificacion,
    addTelephone,
    updateNombre,
    updateDesempleo,
    updateDireccion,
    updateIdentificacion,
    updateTelephone,
    user,
    usuario,
  } = props;
  const [formData, setFormData] = useState({
    tipoUsuario: usuario?.tipoUsuario,
    nombre: usuario?._nombre ? usuario._nombre.nombre : "",
    apellidoMadre: usuario?._nombre ? usuario._nombre.apellidoMadre : "",
    apellidoPadre: usuario?._nombre ? usuario._nombre.apellidoPadre : "",
    email: usuario?.email,
    telefono: usuario?._telefono ? usuario._telefono.descripcion : "",
    identificacion: usuario?._identificacion
      ? usuario._identificacion.descripcion
      : "",
    fechaNacimiento: usuario?._desempleo
      ? usuario._desempleo.fechaNacimiento
      : "",
    lugarDeNacimiento: usuario?._desempleo
      ? usuario._desempleo.lugarDeNacimiento
      : "",
    profesion: usuario?._desempleo ? usuario._desempleo.profesion : "",
    estadoMatrimonial: usuario?._desempleo
      ? usuario._desempleo.estadoMatrimonial
      : "",
    pais: usuario?._direccion ? usuario._direccion.pais : "",
    ciudad: usuario?._direccion ? usuario._direccion.ciudad : "",
    region: usuario?._direccion ? usuario._direccion.region : "",
    calle: usuario?._direccion ? usuario._direccion.calle : "",
    codigoPostal: usuario?._direccion ? usuario._direccion.codigoPostal : "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const crearProfile = () => {
    addDesempleo({
      _usuario: usuario._id,
      fechaNacimiento: formData.fechaNacimiento,
      lugarDeNacimiento: formData.lugarDeNacimiento,
      profesion: formData.profesion,
      estadoMatrimonial: formData.estadoMatrimonial,
    })
      .then((res) => {
        addNombre({
          idUsuario: user._id,
          nombre: formData.nombre,
          apellidoMadre: formData.apellidoMadre,
          apellidoPadre: formData.apellidoPadre,
        });
        addDireccion({
          idUsuario: user._id,
          pais: formData.pais,
          ciudad: formData.ciudad,
          region: formData.region,
          calle: formData.calle,
          codigoPostal: formData.codigoPostal,
        });
        addTelephone({
          idUsuario: user._id,
          telephoneType: "movil",
          tel: formData.telefono,
        });
        addIdentificacion({
          tipoIdentificacion: "cedula",
          descripcion: formData.identificacion,
          idUsuario: user._id,
        });
      })
      .then((response) => {
        getUsuario();
      });
  };

  const editProfile = () => {
    updateDesempleo({
      fechaNacimiento: formData.fechaNacimiento,
      lugarDeNacimiento: formData.lugarDeNacimiento,
      profesion: formData.profesion,
      estadoMatrimonial: formData.estadoMatrimonial,
      idDesempleo: usuario._desempleo._id,
    })
      .then((res) => {
        updateNombre({
          nombre: formData.nombre,
          apellidoMadre: formData.apellidoMadre,
          apellidoPadre: formData.apellidoPadre,
          idNombre: usuario._nombre._id,
        });
        updateDireccion({
          pais: formData.pais,
          ciudad: formData.ciudad,
          region: formData.region,
          calle: formData.calle,
          codigoPostal: formData.codigoPostal,
          idDireccion: usuario._direccion._id,
        });
        updateTelephone({
          telephoneType: "movil",
          tel: formData.telefono,
          idPhone: usuario._telefono._id,
        });
        updateIdentificacion({
          tipoIdentificacion: "cedula",
          descripcion: formData.identificacion,
          idIdentificacion: usuario._identificacion._id,
        });
      })
      .then((response) => {
        getUsuario();
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (usuario?._desempleo || usuario?._empresa) {
      editProfile();
    } else {
      crearProfile();
    }
  };

  return (
    <>
      <Card className="mb-8 shadow-md">
        <CardBody>
          <form
            onSubmit={onSubmit}
            className="text-sm text-gray-600 dark:text-gray-400"
          >
            <SectionTitle>Datos Personales</SectionTitle>

            {/*}Tipo De cuenta{*/}
            <div className="mt-4">
              <Label>Tipo Cuenta</Label>
              <div className="mt-2">
                <Label radio>
                  <Input
                    type="radio"
                    value={usuario.tipoUsuario}
                    name="tipoUsuario"
                    checked={usuario.tipoUsuario === "desempleo" ? true : false}
                    disabled
                  />
                  <span className="ml-2">Desempleo</span>
                </Label>
                <Label className="ml-6" radio>
                  <Input
                    type="radio"
                    value="empresa"
                    name="tipoUsuario"
                    disabled
                    checked={usuario.tipoUsuario === "empresa" ? true : false}
                  />
                  <span className="ml-2">Empresa</span>
                </Label>
              </div>
            </div>

            {/*}Nombre {*/}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Label>
                <span>Nombre</span>
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
                <span>Apellido Madre</span>
                <Input
                  className="mt-1 col-4"
                  placeholder=""
                  name="apellidoMadre"
                  value={formData.apellidoMadre}
                  onChange={onChange}
                />
              </Label>
              <Label>
                <span>Apellido Padre</span>
                <Input
                  className="mt-1 col-4"
                  placeholder=""
                  name="apellidoPadre"
                  onChange={onChange}
                  value={formData.apellidoPadre}
                  required
                />
              </Label>
            </div>

            {/*}Email,Telephone {*/}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <Label>
                <span>Email</span>
                <Input
                  className="mt-1"
                  placeholder=""
                  name="email"
                  value={formData.email}
                  onChange={onChange}
                  required
                />
              </Label>
              <Label>
                <span>Telephone</span>
                <Input
                  className="mt-1 col-4"
                  placeholder=""
                  name="telefono"
                  value={formData.telefono}
                  onChange={onChange}
                  required
                />
              </Label>
            </div>

            {/*}Fecha Nacimiento,Lugar Nacimiento {*/}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <Label>
                <span>Identificacion</span>
                <Input
                  className="mt-1"
                  placeholder=""
                  name="identificacion"
                  value={formData.identificacion}
                  onChange={onChange}
                  required
                />
              </Label>
              <Label>
                <span>Fecha Nacimiento</span>
                <Input
                  className="mt-1"
                  placeholder=""
                  name="fechaNacimiento"
                  onChange={onChange}
                  value={formData.fechaNacimiento}
                  required
                />
              </Label>
              <Label>
                <span>Lugar Nacimiento</span>
                <Input
                  className="mt-1 col-4"
                  placeholder=""
                  name="lugarDeNacimiento"
                  onChange={onChange}
                  value={formData.lugarDeNacimiento}
                  required
                />
              </Label>
            </div>

            {/*}Profesion,estado matrimonial {*/}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <Label>
                <span>Estado Matrimonial</span>
                <Input
                  className="mt-1"
                  placeholder=""
                  name="estadoMatrimonial"
                  onChange={onChange}
                  value={formData.estadoMatrimonial}
                  required
                />
              </Label>
              <Label>
                <span>Profesion</span>
                <Input
                  className="mt-1 col-4"
                  placeholder=""
                  name="profesion"
                  onChange={onChange}
                  value={formData.profesion}
                  required
                />
              </Label>
            </div>

            {/*}Direccion-Pais {*/}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <Label>
                <span>Pais</span>
                <Select
                  className="mt-1"
                  placeholder=""
                  name="pais"
                  onChange={onChange}
                  value={formData.pais}
                  required
                >
                  <option>Selecionar</option>
                  {pais.map((data) => {
                    return <option value={data.name_es}>{data.name_es}</option>;
                  })}
                </Select>
              </Label>
            </div>

            {/*}Direccion-Calle {*/}
            <div className="mt-4 grid grid-cols-1">
              <Label>
                <span>Calle</span>
                <Input
                  className="mt-1"
                  placeholder=""
                  name="calle"
                  onChange={onChange}
                  value={formData.calle}
                  required
                />
              </Label>
            </div>

            {/*}Direccion-ciudad,region,code postal {*/}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Label>
                <span>Ciudad</span>
                <Input
                  className="mt-1"
                  placeholder=""
                  name="ciudad"
                  onChange={onChange}
                  value={formData.ciudad}
                  required
                />
              </Label>
              <Label>
                <span>Region</span>
                <Input
                  className="mt-1 col-4"
                  placeholder=""
                  name="region"
                  onChange={onChange}
                  value={formData.region}
                  required
                />
              </Label>
              <Label>
                <span>Codigo Postal</span>
                <Input
                  className="mt-1 col-4"
                  placeholder=""
                  name="codigoPostal"
                  onChange={onChange}
                  value={formData.codigoPostal}
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

DatosPersonalesD.prototype = {
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  usuario: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  user: state.auth.user,
  usuario: state.usuario.usuario,
});

const mapDispatchToProps = {
  loadUser,
  addNombre,
  addDesempleo,
  addDireccion,
  addIdentificacion,
  addTelephone,
  updateNombre,
  updateDesempleo,
  updateDireccion,
  updateIdentificacion,
  updateTelephone,
};

export default connect(mapStateToProps, mapDispatchToProps)(DatosPersonalesD);
