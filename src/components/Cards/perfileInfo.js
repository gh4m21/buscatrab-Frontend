import React from "react";
import PageTitle from "../Typography/PageTitle";
import { CalendarIcon, LinkIcon } from "../../icons";
import PerfileImg from "../../assets/img/profile.png";
//redux
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Button, Card, CardBody } from "@windmill/react-ui";
import moment from "moment";

const DatosPersonales = (props) => {
  const { usuario, user } = props;
  return (
    <>
      {/*} Encabeza Perfile{*/}

      <Card className="mb-8 shadow-md">
        <CardBody>
          <div
            className="w-full bg-cover bg-no-repeat bg-center bg-blue-700 dark:bg-black"
            style={{
              height: "120px",
              width: "100%",
            }}
          >
            <p className="text-xl text-white text-center pt-12 dark:text-gray-100">
              {usuario._desempleo?.profesion
                ? usuario._desempleo.profesion
                : ""}
            </p>
          </div>
          <div className="p-4">
            <div className="relative flex w-full">
              {/*} Avatar {*/}
              <div className="flex flex-1">
                <div style={{ marginTop: "-4rem" }}>
                  <div
                    style={{ height: "9rem", width: "9rem" }}
                    className="md rounded-full relative avatar"
                  >
                    <img
                      style={{ height: "9rem", width: "9rem" }}
                      className="md rounded-full relative border-2 border-gray-300"
                      src={usuario.foto ? usuario.foto : PerfileImg}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              {/*} Profile info {*/}
              <div className="space-y-1 justify-center w-full mt-3 ml-3">
                {/*} User basic{*/}
                <div>
                  <h2 className="text-xl leading-6 font-bold text-dark mb-1 dark:text-gray-400">
                    {usuario._nombre?.nombre ? usuario._nombre.nombre : ""}{" "}
                    {usuario._nombre?.apellidoMadre
                      ? usuario._nombre.apellidoMadre
                      : ""}{" "}
                    {usuario._nombre?.apellidoPadre
                      ? usuario._nombre.apellidoPadre
                      : ""}
                  </h2>
                  <p className="text-sm leading-5 font-medium text-gray-600 mb-2 dark:text-gray-500">
                    {usuario.email}
                  </p>
                </div>
                {/*} Description and others {*/}
                <div className="mt-3">
                  {usuario.acercaDe ? (
                    <p className=" mb-2 text-md text-gray-600 dark:text-gray-400">
                      {usuario.acercaDe ? usuario.acercaDe : ""}
                    </p>
                  ) : null}
                  <div className="text-gray-600 flex">
                    {usuario.sitioWeb ? (
                      <span className="flex mr-2">
                        <LinkIcon />
                        <a
                          href={usuario.sitioWeb ? usuario.sitioWeb : ""}
                          target="#"
                          className="leading-5 ml-1 mr-3 text-green-400"
                        >
                          {usuario.sitioWeb ? usuario.sitioWeb : ""}
                        </a>
                      </span>
                    ) : null}
                    <span className="flex mr-2">
                      <CalendarIcon />
                      <span className="leading-5 ml-1 dark:text-gray-500">
                        inscripcion desde{" "}
                        {moment(usuario.fechaCreacion).format("MMMM, YYYY")}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="pt-3 flex justify-start items-start w-full">
                  <div className="text-center pr-3">
                    <Button
                      tag="a"
                      href={"mailto:" + usuario.email}
                      className="md text-xl ml-2 mr-2 mt-4"
                      block
                    >
                      Mensaje
                    </Button>
                  </div>
                  <div className="text-center px-3">
                    <Button
                      layout="outline"
                      tag="a"
                      href={
                        "tel:" + usuario._telefono
                          ? usuario._telefono.descripcion
                          : ""
                      }
                      className="md text-xl ml-2 mr-2 mt-4"
                      block
                    >
                      Llamar
                    </Button>
                  </div>
                  <div className="text-center px-3">
                    {usuario._id === user._id ? (
                      <>
                        <Button
                          layout="outline"
                          tag="a"
                          href="../../app/editprofile"
                          className="md text-xl ml-2 mr-2 mt-4"
                          block
                        >
                          Editar Perfile
                        </Button>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

DatosPersonales.prototype = {
  user: PropTypes.object.isRequired,
  usuario: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  usuario: state.usuario.usuario,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DatosPersonales);
