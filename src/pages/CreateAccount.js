import React, { useState } from "react";
import { Link } from "react-router-dom";

import HeaderNotLogin from "../components/HeaderNotLogin";

import ImageLight from "../assets/img/create-account-office.jpeg";
import ImageDark from "../assets/img/create-account-office-dark.jpeg";
import { GoogleIcon } from "../icons";
import { Input, Label, Button } from "@windmill/react-ui";
import { PropTypes } from "prop-types";
import { register } from "../redux/actions/auth";
import { connect } from "react-redux";

const CreateAccount = (props) => {
  const { loading, isAuthenticated, register } = props;

  //Get data from login form
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    tipoUsuario: "",
    isActive: false,
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, tipoUsuario, isActive } =
      formData;

    if (password === confirmPassword) {
      register({
        email,
        password,
        tipoUsuario,
      });
    } else {
      console.log("contrasena y confirmacion de contrasena no esta identica");
    }
  };

  if (isAuthenticated) {
    window.location.href = "../../app/editprofile";
  }

  return (
    <div>
      <HeaderNotLogin />
      <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <div className="flex flex-col overflow-y-auto md:flex-row">
            <div className="h-32 md:h-auto md:w-1/2">
              <img
                aria-hidden="true"
                className="object-cover w-full h-full dark:hidden"
                src={ImageLight}
                alt="Office"
              />
              <img
                aria-hidden="true"
                className="hidden object-cover w-full h-full dark:block"
                src={ImageDark}
                alt="Office"
              />
            </div>
            <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <form onSubmit={onSubmit} className="w-full">
                <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                  Crear una cuenta
                </h1>
                <Label>
                  <span>Correo Electronico</span>
                  <Input
                    name="email"
                    className="mt-1 border-black"
                    type="email"
                    placeholder="john@doe.com"
                    onChange={onChange}
                    required
                  />
                </Label>
                <Label className="mt-4">
                  <span>Contrasena</span>
                  <Input
                    name="password"
                    className="mt-1 border-black"
                    placeholder="***************"
                    type="password"
                    onChange={onChange}
                    required
                  />
                </Label>
                <Label className="mt-4">
                  <span>Confirmar contrasena</span>
                  <Input
                    name="confirmPassword"
                    className="mt-1 border-black"
                    placeholder="***************"
                    type="password"
                    onChange={onChange}
                    required
                  />
                </Label>
                <Label className="mt-2">Tipo de usuario</Label>
                <Label radio required>
                  <Input
                    type="radio"
                    className="border-black"
                    value="desempleo"
                    name="tipoUsuario"
                    onChange={onChange}
                  />
                  <span className="ml-2">Desempleo</span>
                </Label>
                <Label className="ml-6" radio>
                  <Input
                    type="radio"
                    className="border-black"
                    value="empresa"
                    name="tipoUsuario"
                    onChange={onChange}
                  />
                  <span className="ml-2">Empresa</span>
                </Label>

                <Label className="mt-6" check>
                  <Input
                    type="checkbox"
                    name="isActive"
                    onChange={onChange}
                    required
                  />
                  <span className="ml-2">
                    Yo acepto las condiciones de utilizaciones de Buscatrab{" "}
                    <span className="underline">Temas & Condiciones</span>
                  </span>
                </Label>

                <Button type="submit" block className="mt-4">
                  Create account
                </Button>

                <hr className="my-8" />

                <Button block layout="outline">
                  <GoogleIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                  Google
                </Button>

                <p className="mt-4">
                  <Link
                    className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                    to="/login"
                  >
                    Ya tienes una cuenta? Conectar
                  </Link>
                </p>
              </form>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

CreateAccount.prototype = {
  user: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.user,
  loading: state.auth.loading,
});

const mapDispatchToProps = {
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
