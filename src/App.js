import React, { lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";

import { Provider } from "react-redux";
import store from "./redux/store";
//redux
import { loadUser } from "./redux/actions/auth";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));
const CreateAccount = lazy(() => import("./pages/CreateAccount"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/forgot-password" component={ForgotPassword} />

          {/* Place new routes over this */}
          <Route path="/app" component={Layout} />
          <ToastContainer autoclose={5000} />
          {/* If you have an index page, you can remothis Redirect */}
          <Redirect exact from="/" to="/Login" />
        </Switch>
      </Router>
    </Provider>
  );
}

App.prototype = {
  user: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

const mapDispatchToProps = {
  loadUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
