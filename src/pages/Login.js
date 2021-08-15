import React, { useState } from "react";
import { Redirect } from "react-router";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

import HeaderNotLogin from "../components/HeaderNotLogin";
import { HalfCircleSpinner } from "react-epic-spinners";
import ImageLight from "../assets/img/login-white.jpg";
import ImageDark from "../assets/img/login-office-dark.jpeg";
import { GoogleIcon } from "../icons";
import { Label, Input, Button } from "@windmill/react-ui";

//redux
import { login } from "../redux/actions/auth";
import { connect } from "react-redux";

const Login = ({ isAuthenticated, loading, login, token }) => {
  //Get data from login form
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    login({ email, password });
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isAuthenticated || token) {
    return <Redirect to="/app" />;
  }

  return (
    <div>
      <HeaderNotLogin />
      {loading ? (
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
                    Conectar en tu cuenta
                  </h1>
                  <Label>
                    <span>Correo Electronico</span>
                    <Input
                      name="email"
                      className="mt-1 border-black"
                      type="email"
                      placeholder="john@doe.com"
                      required
                      onChange={onChange}
                    />
                  </Label>

                  <Label className="mt-4">
                    <span>Contrasena</span>
                    <Input
                      name="password"
                      className="mt-1 border-black"
                      type="password"
                      placeholder="***************"
                      required
                      onChange={onChange}
                    />
                  </Label>

                  <Button type="submit" className="mt-4" block>
                    Conectar
                  </Button>

                  <hr className="my-8" />

                  <Button block layout="outline">
                    <GoogleIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                    Google
                  </Button>
                  <p className="mt-2">
                    <Link
                      className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                      to="/forgot-password"
                    >
                      Olvida tu contrasena?
                    </Link>
                  </p>
                  <p className="mt-1">
                    <Link
                      className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                      to="/create-account"
                    >
                      Registrarse
                    </Link>
                  </p>
                </form>
              </main>
            </div>
          </div>
        </div>
      ) : (
        <HalfCircleSpinner color="blue" />
      )}
    </div>
  );
};

Login.prototype = {
  user: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  token: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  token: state.auth.token,
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
