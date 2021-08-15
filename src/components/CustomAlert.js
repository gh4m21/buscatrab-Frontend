import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Alert } from "@windmill/react-ui";

const CustomAlert = ({ alerts }) => {
  let body = document.querySelector("body");
  body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <Alert type={alert.alertType} id={alert.id}>
        {" "}
        {alert.message}
      </Alert>
    ))
  );
};
Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
