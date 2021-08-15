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

const InformacionProfile = (props) => {
  const { isAuthenticated, loading } = props;
  return (
    <>
      <Card className="mb-8 shadow-md">
        <CardBody>
          <form className="text-sm text-gray-600 dark:text-gray-400">
            <SectionTitle>Informacion Perfil</SectionTitle>
            {/*}Cambiar avatar{*/}
            <Card className="mb-8 shadow-md">
              <CardBody>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    <span className="inline-block h-20 w-20 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-900">
                      <AvatarIcon />
                    </span>
                    <Label className="px-6 pt-5 pb-6 border-2 border-blue-300 border-dashed rounded-md">
                      <Input
                        type="file"
                        className="mt-1"
                        placeholder="foto"
                        name="foto"
                        id="img"
                        style={{ display: "none" }}
                      />
                      <label for="img">Click para agregar imagen</label>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </Label>
                    <Label>
                      <Button type="button" layout="outline">
                        Cambiar
                      </Button>
                    </Label>
                  </div>
                </p>
              </CardBody>
            </Card>

            {/*}Website {*/}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <Label>
                <span>Sitio Web</span>
                <div className="relative">
                  <input
                    className="block w-full pl-20 mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    placeholder=""
                    name="sitioWeb"
                  />
                  <button
                    layout="outline"
                    className="absolute inset-y-0 px-3 text-sm font-medium leading-5 text-dark-500 transition-colors duration-150 bg-blue-200 border border-transparent rounded-l-md focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                    disabled
                  >
                    Https://
                  </button>
                </div>
              </Label>
            </div>
            {/*}Acerca de {*/}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <Label>
                <span>Acerca de</span>
                <Textarea className="mt-1" placeholder="" name="notas" />
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

InformacionProfile.prototype = {
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(InformacionProfile);
