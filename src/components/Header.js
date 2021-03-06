import React, { useContext, useState, useEffect } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { PropTypes } from "prop-types";
import {
  SearchIcon,
  MoonIcon,
  SunIcon,
  BellIcon,
  MenuIcon,
  OutlinePersonIcon,
  OutlineCogIcon,
  OutlineLogoutIcon,
} from "../icons";
import {
  Avatar,
  Badge,
  Input,
  Dropdown,
  DropdownItem,
  WindmillContext,
} from "@windmill/react-ui";
import { logout, loadUser } from "../redux/actions/auth";
import { connect } from "react-redux";
import PerfileImg from "../assets/img/profile.png";

const Header = ({ logout, user, usuario }) => {
  const { mode, toggleMode } = useContext(WindmillContext);
  const { toggleSidebar } = useContext(SidebarContext);

  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  //Make the search
  const [searchTerm, setSearchTerm] = useState("");

  function handleNotificationsClick() {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
  }

  function handleProfileClick() {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  }

  const handleLogOut = () => {
    logout();
  };

  return (
    <header className="bg-blue-700 z-40 py-4 bg-white shadow-bottom dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-blue-600 dark:text-purple-300">
        {/* <!-- Mobile hamburger --> */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-green"
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          <MenuIcon className="w-6 h-6" aria-hidden="true" />
        </button>
        {/* <!-- Search input --> */}
        <div className="flex justify-center flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-green-400">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <SearchIcon className="w-4 h-4" aria-hidden="true" />
            </div>
            <Input
              className="pl-8 text-gray-700"
              placeholder="Search for projects"
              aria-label="Search"
            />
          </div>
        </div>
        <ul className="flex items-center flex-shrink-0 space-x-6">
          {/* <!-- Theme toggler --> */}
          <li className="flex">
            <button
              className="text-green-400 rounded-md focus:outline-none focus:shadow-outline-green"
              onClick={toggleMode}
              aria-label="Toggle color mode"
            >
              {mode === "dark" ? (
                <SunIcon className="w-5 h-5" aria-hidden="true" />
              ) : (
                <MoonIcon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </li>
          {/* <!-- Notifications menu --> */}
          <li className="relative">
            <button
              className="text-green-400 relative align-middle rounded-md focus:outline-none focus:shadow-outline-green"
              onClick={handleNotificationsClick}
              aria-label="Notifications"
              aria-haspopup="true"
            >
              <BellIcon className="w-5 h-5" aria-hidden="true" />
              {/* <!-- Notification badge --> */}
              <span
                aria-hidden="true"
                className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
              ></span>
            </button>

            <Dropdown
              align="right"
              isOpen={isNotificationsMenuOpen}
              onClose={() => setIsNotificationsMenuOpen(false)}
            >
              <DropdownItem tag="a" href="#" className="justify-between">
                <span>Mensaje</span>
                <Badge type="danger">13</Badge>
              </DropdownItem>
              <DropdownItem
                className="justify-between"
                onClick={() => alert("Alerts!")}
              >
                <span>Notificacion</span>
                <Badge type="danger">6</Badge>
              </DropdownItem>
            </Dropdown>
          </li>
          {/* <!-- Profile menu --> */}
          <li className="relative">
            <button
              className="rounded-full focus:shadow-outline-purple focus:outline-none"
              onClick={handleProfileClick}
              aria-label="Account"
              aria-haspopup="true"
            >
              <Avatar
                className="align-middle"
                src={user?.foto ? user.foto : PerfileImg}
                alt=""
                aria-hidden="true"
              />
            </button>
            <Dropdown
              align="right"
              isOpen={isProfileMenuOpen}
              onClose={() => setIsProfileMenuOpen(false)}
            >
              {user ? (
                <>
                  <DropdownItem tag="a" href={"../../app/profile/" + user._id}>
                    <OutlinePersonIcon
                      className="w-4 h-4 mr-3"
                      aria-hidden="true"
                    />
                    <span>Perfile</span>
                  </DropdownItem>
                </>
              ) : null}
              <DropdownItem tag="a" href="../../app/editprofile">
                <OutlineCogIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                <span>Editar Perfile</span>
              </DropdownItem>
              <DropdownItem onClick={handleLogOut}>
                <OutlineLogoutIcon
                  className="w-4 h-4 mr-3"
                  aria-hidden="true"
                />
                <span>Desconectar</span>
              </DropdownItem>
            </Dropdown>
          </li>
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  usuario: state.usuario.usuario,
});

const mapDispatchToProps = { loadUser, logout };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
