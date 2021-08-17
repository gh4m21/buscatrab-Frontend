import React, { useContext, Suspense, useEffect, lazy } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import routes from "../routes";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Main from "../containers/Main";
import ThemedSuspense from "../components/ThemedSuspense";
import { SidebarContext } from "../context/SidebarContext";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Page404 = lazy(() => import("../pages/404"));

const Layout = ({ auth: isAuthenticated, loading }) => {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  let location = useLocation();

  useEffect(() => {
    closeSidebar();
  }, [location]);

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
        isSidebarOpen && "overflow-hidden"
      }`}
    >
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        <Header />
        <Main>
          <Suspense fallback={<ThemedSuspense />}>
            <Switch>
              {routes.map((route, i) => {
                return route.component ? (
                  <Route
                    key={i}
                    exact={true}
                    path={`/app${route.path}`}
                    render={(props) =>
                      !isAuthenticated && !loading ? (
                        <Redirect to="/login" />
                      ) : (
                        <route.component {...props} />
                      )
                    }
                  />
                ) : null;
              })}
              <Redirect exact from="/app" to="/app/inicio" />
              <Route component={Page404} />
            </Switch>
          </Suspense>
        </Main>
      </div>
    </div>
  );
};

Layout.prototype = {
  auth: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  loading: state.loading,
});

export default connect(mapStateToProps)(Layout);
