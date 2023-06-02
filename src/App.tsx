import { useState } from "react";
import { Form, Nav, Navbar, OverlayTrigger, Popover } from "react-bootstrap";
import {
  FaCloud,
  FaCog,
  FaHome,
  FaMoon,
  FaSun,
  FaTools,
  FaWaveSquare,
  FaWifi,
} from "react-icons/fa";
import {
  MdExitToApp,
  MdHelpOutline,
  MdNotifications,
  MdSave,
  MdSearch,
} from "react-icons/md";
import Dashboard from "./DashboardTab";
import System from "./SystemTab";
import "./style.css";
import DrawerComponent from "./DrawerComponent";
import EventsPage from "./events";
import BoostingPricesPage from "./boosting";
import GuildMembers from "./best";
import Home from "./home";

const Page = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showPopover, setShowPopover] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [drawerType, setDrawerType] = useState<
    "system" | "advanced" | "status"
  >("system");
  const [darkTheme, setDarkTheme] = useState(false); // New state for dark theme

  const handleTabClick = (tab: string) => {
    setActiveTab(tab === activeTab ? "" : tab);
  };

  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

  const handleDrawerToggle = (type: "system" | "advanced" | "status") => {
    setShowDrawer(true);
    setDrawerType(type);
  };

  const handleDrawerClose = () => {
    setShowDrawer(false);
  };

  const toggleDarkTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const popover = (
    <Popover id="search-popover" style={{ width: "200px" }}>
      <Popover.Body>
        <input type="text" placeholder="Search..." style={{ width: "100%" }} />
      </Popover.Body>
    </Popover>
  );

  return (
    <div className={darkTheme ? "dark-theme" : "light-theme"}>
      {" "}
      {/* Add dark-theme class if darkTheme is true */}
      {showPopover && <div className="overlay" />}
      <div
        style={{
          backgroundColor: darkTheme ? "#333" : "#f0f0f0",
          height: "80px",
          width: "100%",
          position: "fixed",
          zIndex: "1000",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <div className="d-flex align-items-center justify-content-center">
          <img
            src="sanitar2.jpg"
            alt="Logo"
            className="rounded-circle img-fluid"
            style={{ width: "60px" }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <MdSave
            size={32}
            style={{
              marginRight: "10px",
              color: darkTheme ? "#fff" : "#000000",
            }}
          />
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={popover}
            show={showPopover}
            onToggle={togglePopover}
            rootClose
          >
            <MdSearch
              id="search-icon"
              size={32}
              style={{
                marginRight: "10px",
                color: darkTheme ? "#fff" : "#000000",
                cursor: "pointer",
              }}
            />
          </OverlayTrigger>
          <MdNotifications
            size={32}
            style={{
              marginRight: "10px",
              color: darkTheme ? "#fff" : "#000000",
            }}
          />
          <MdHelpOutline
            size={32}
            style={{
              marginRight: "10px",
              color: darkTheme ? "#fff" : "#000000",
            }}
          />
          <MdExitToApp
            size={32}
            style={{
              marginRight: "30px",
              color: darkTheme ? "#fff" : "#000000",
            }}
          />
          <div className={`theme-switch ${darkTheme ? "dark" : "light"}`}>
            <Form.Check
              type="switch"
              id="themeSwitch"
              checked={darkTheme}
              onChange={toggleDarkTheme}
              label={
                <div className="switch-content">
                  <span className="switch-icon">
                    {darkTheme ? <FaMoon /> : <FaSun />}
                  </span>
                  <span className="switch-label">
                    {darkTheme ? "Dark Theme" : "Light Theme"}
                  </span>
                </div>
              }
            />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", paddingTop: "80px" }}>
        <div
          style={{
            width: "117px",
            position: "fixed",
            backgroundColor: darkTheme ? "#333" : "#f0f0f0",
            height: "100%",
            zIndex: "50",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Navbar style={{ padding: "10px 0", margin: "0" }}>
            <Nav className="flex-column">
              <Nav.Link
                href="#dashboard"
                className={activeTab === "dashboard" ? "active" : ""}
                onClick={() =>
                  activeTab === "dashboard" ? null : handleTabClick("dashboard")
                }
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "10px 0",
                  textDecoration: "none",
                  borderLeft:
                    activeTab === "dashboard" ? "4px solid #eca302" : "none",
                  width: "100%",
                  backgroundColor: "transparent",
                  color: darkTheme ? "#fff" : "#000000",
                }}
              >
                <FaHome
                  size={24}
                  style={{
                    marginBottom: "5px",
                    color: darkTheme ? "#fff" : "#000000",
                  }}
                />
                <span
                  style={{
                    color: darkTheme ? "#fff" : "#000000",
                  }}
                >
                  Dashboard
                </span>
              </Nav.Link>
              <Nav.Link
                href="#events"
                className={activeTab === "events" ? "active" : ""}
                onClick={() =>
                  activeTab === "events" ? null : handleTabClick("events")
                }
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textDecoration: "none",
                  padding: "10px 0",
                  borderLeft:
                    activeTab === "events" ? "4px solid #eca302" : "none",
                  width: "100%",
                  backgroundColor: "transparent",
                  color: darkTheme ? "#fff" : "#000000",
                }}
              >
                <FaCloud
                  size={24}
                  style={{
                    marginBottom: "5px",
                    color: darkTheme ? "#fff" : "#000000",
                  }}
                />
                <span style={{ color: darkTheme ? "#fff" : "#000000" }}>
                  SFC protect
                </span>
              </Nav.Link>
              <Nav.Link
                href="#boosting"
                className={activeTab === "boosting" ? "active" : ""}
                onClick={() =>
                  activeTab === "boosting" ? null : handleTabClick("boosting")
                }
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                  alignItems: "center",
                  padding: "10px 0",
                  borderLeft:
                    activeTab === "boosting" ? "4px solid #eca302" : "none",
                  width: "100%",
                  backgroundColor: "transparent",
                  color: darkTheme ? "#fff" : "#000000",
                }}
              >
                <FaWaveSquare
                  size={24}
                  style={{
                    marginBottom: "5px",
                    color: darkTheme ? "#fff" : "#000000",
                  }}
                />
                <span style={{ color: darkTheme ? "#fff" : "#000000" }}>
                  Network
                </span>
              </Nav.Link>
              <Nav.Link
                href="#guildMembers"
                className={activeTab === "guildMembers" ? "active" : ""}
                onClick={() =>
                  activeTab === "guildMembers"
                    ? null
                    : handleTabClick("guildMembers")
                }
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textDecoration: "none",
                  padding: "10px 0",
                  borderLeft:
                    activeTab === "guildMembers" ? "4px solid #eca302" : "none",
                  width: "100%",
                  backgroundColor: "transparent",
                  color: darkTheme ? "#fff" : "#000000",
                }}
              >
                <FaTools
                  size={24}
                  style={{
                    marginBottom: "5px",
                    color: darkTheme ? "#fff" : "#000000",
                  }}
                />
                <span style={{ color: darkTheme ? "#fff" : "#000000" }}>
                  Advanced
                </span>
              </Nav.Link>
              <Nav.Link
                href="#access_point"
                className={activeTab === "access_point" ? "active" : ""}
                onClick={() =>
                  activeTab === "access_point"
                    ? null
                    : handleTabClick("access_point")
                }
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textDecoration: "none",
                  padding: "10px 0",
                  borderLeft:
                    activeTab === "access_point" ? "4px solid #eca302" : "none",
                  width: "100%",
                  backgroundColor: "transparent",
                  color: darkTheme ? "#fff" : "#000000",
                }}
              >
                <FaWifi
                  size={24}
                  style={{
                    marginBottom: "5px",
                    color: darkTheme ? "#fff" : "#000000",
                  }}
                />
                <span style={{ color: darkTheme ? "#fff" : "#000000" }}>
                  Access point
                </span>
              </Nav.Link>
              <Nav.Link
                href="#system"
                className={activeTab === "system" ? "active" : ""}
                onClick={() =>
                  activeTab === "system" ? null : handleTabClick("system")
                }
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textDecoration: "none",
                  padding: "10px 0",
                  borderLeft:
                    activeTab === "system" ? "4px solid #eca302" : "none",
                  width: "100%",
                  backgroundColor: "transparent",
                  color: darkTheme ? "#fff" : "#000000",
                }}
              >
                <FaCog
                  size={24}
                  style={{
                    marginBottom: "5px",
                    color: darkTheme ? "#fff" : "#000000",
                  }}
                />
                <span style={{ color: darkTheme ? "#fff" : "#000000" }}>
                  System
                </span>
              </Nav.Link>
              <Nav.Link
                href="#status"
                className={activeTab === "status" ? "active" : ""}
                onClick={() =>
                  activeTab === "status" ? null : handleTabClick("status")
                }
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textDecoration: "none",
                  padding: "10px 0",
                  borderLeft:
                    activeTab === "status" ? "4px solid #eca302" : "none",
                  width: "100%",
                  backgroundColor: "transparent",
                  color: darkTheme ? "#fff" : "#000000",
                }}
              >
                <FaWaveSquare
                  size={24}
                  style={{
                    marginBottom: "5px",
                    color: darkTheme ? "#fff" : "#000000",
                  }}
                />
                <span style={{ color: darkTheme ? "#fff" : "#000000" }}>
                  Status
                </span>
              </Nav.Link>
            </Nav>
          </Navbar>
          <div>
            {activeTab === "system" && (
              <button onClick={() => handleDrawerToggle("system")}>
                Open System Drawer
              </button>
            )}{" "}
            {activeTab === "advanced" && (
              <button onClick={() => handleDrawerToggle("advanced")}>
                Open Advanced Drawer
              </button>
            )}
            {activeTab === "status" && (
              <button onClick={() => handleDrawerToggle("status")}>
                Open Status Drawer
              </button>
            )}
            <DrawerComponent
              show={showDrawer}
              onClose={handleDrawerClose}
              drawerType={drawerType}
            />
          </div>
        </div>

        <div style={{ marginLeft: "117px", width: "calc(100% - 117px)" }}>
          {activeTab === "dashboard" && <Home />}
          {activeTab === "system" && <System deviceName="Balance_A59A" />}
          {activeTab === "events" && <EventsPage />}
          {activeTab === "boosting" && <BoostingPricesPage />}
          {activeTab === "guildMembers" && <GuildMembers />}
        </div>
      </div>
    </div>
  );
};

export default Page;
