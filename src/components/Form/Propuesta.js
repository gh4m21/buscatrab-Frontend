import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import {
  Card,
  CardBody,
  Input,
  Label,
  Textarea,
  Button,
} from "@windmill/react-ui";
import SectionTitle from "../Typography/SectionTitle";
import { AvatarIcon } from "../../icons";
import { addCv } from "../../redux/actions/cv";
import { addSolicitudTrabajo } from "../../redux/actions/solicitudTrabajo";

const Propuesta = (props) => {
  const {
    isAuthenticated,
    loading,
    usuario,
    user,
    publicacionTrabajo,
    addCv,
    cv,
    addSolicitudTrabajo,
  } = props;
  const [file, setFile] = useState("");
  const [form, setForm] = useState({
    letraMotivacion: "",
  });
  const [fileName, setFileName] = useState(
    "Click para agregar tu cv en formato pdf"
  );

  const onChangeCV = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const formData = new FormData();
  formData.append("file", file);
  formData.append("idUsuario", user._id);

  const onSubmitCv = (e) => {
    e.preventDefault();
    addCv(formData).then(() => {
      window.location.reload();
    });
  };

  const onChangeSolicitudTrabajo = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmitSolicitudTrabajo = (e) => {
    e.preventDefault();
    addSolicitudTrabajo({
      _publicacionTrabajo: publicacionTrabajo._id,
      _desempleo: user._id,
      _cv: cv._id,
      motivacion: form.letraMotivacion,
    }).then(() => {
      window.location.href =
        "../../app/verDetalleTrabajo/" + publicacionTrabajo._id;
    });
  };

  return (
    <>
      <Card className="mb-8 shadow-md">
        <CardBody>
          {!cv?.[0]?._id ? (
            <form
              onSubmit={onSubmitCv}
              className="text-sm text-gray-600 dark:text-gray-400"
            >
              <SectionTitle>Informacion Perfil</SectionTitle>
              {/*}Cambiar avatar{*/}
              <Card className="mb-8 shadow-md">
                <CardBody>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                      <Label className="px-6 pt-5 pb-6 border-2 border-blue-300 border-dashed rounded-md">
                        <Input
                          type="file"
                          className="mt-1"
                          placeholder="pdf"
                          name="file"
                          id="img"
                          style={{ display: "none" }}
                          accept="application/pdf"
                          onChange={onChangeCV}
                          required
                        />
                        <label for="img">{fileName}</label>
                        <p className="text-xs text-gray-500">
                          *.pdf no mas de 5 mb
                        </p>
                      </Label>
                      <Label>
                        <Button type="submit" layout="outline">
                          Subir
                        </Button>
                      </Label>
                    </div>
                  </p>
                </CardBody>
              </Card>
            </form>
          ) : (
            <>
              <form onSubmit={onSubmitSolicitudTrabajo}>
                <div className="mt-4 grid grid-cols-1">
                  <Label>
                    <span>Letra de Motivacion</span>
                    <Textarea
                      className="mt-1"
                      placeholder=""
                      name="letraMotivacion"
                      onChange={onChangeSolicitudTrabajo}
                      required
                    />
                  </Label>
                </div>

                {/*}Button Salvar{*/}
                <div className="mt-4 px-4 py-3 text-right sm:px-6">
                  <Button type="submit">Salvar</Button>
                </div>
              </form>
            </>
          )}
        </CardBody>
      </Card>
    </>
  );
};

Propuesta.prototype = {
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  usuario: PropTypes.object.isRequired,
  publicacionTrabajo: PropTypes.object.isRequired,
  cv: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  user: state.auth.user,
  usuario: state.usuario.usuario,
  publicacionTrabajo: state.publicacionTrabajo.publicacionTrabajo,
  cv: state.cv.cv,
});

const mapDispatchToProps = { addCv, addSolicitudTrabajo };

export default connect(mapStateToProps, mapDispatchToProps)(Propuesta);
