import React from "react";
import { Button } from "react-bootstrap";
import "./DrawerComponent.css"; // Import CSS file for styling

type DrawerProps = {
  show: boolean;
  onClose: () => void;
  drawerType: "system" | "advanced" | "status";
};

const DrawerComponent: React.FC<DrawerProps> = ({
  show,
  onClose,
  drawerType,
}) => {
  const renderButtons = () => {
    switch (drawerType) {
      case "system":
        return (
          <>
            <Button variant="primary">Button 1</Button>
            <Button variant="secondary">Button 2</Button>
            <Button variant="success">Button 3</Button>
          </>
        );
      case "advanced":
        return (
          <>
            <Button variant="warning">Button 4</Button>
            <Button variant="danger">Button 5</Button>
          </>
        );
      case "status":
        return (
          <>
            <Button variant="info">Button 6</Button>
            <Button variant="light">Button 7</Button>
            <Button variant="dark">Button 8</Button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {show && <div className="overlay" onClick={onClose} />}{" "}
      {/* Add overlay */}
      <div className={`drawer ${show ? "open" : ""}`}>
        <div className="drawer-header">
          <h3>{drawerType} Drawer</h3>
          <Button
            variant="outline-dark"
            onClick={onClose}
            className="close-button"
          >
            Close
          </Button>
        </div>
        <div className="drawer-body">{renderButtons()}</div>
      </div>
    </>
  );
};

export default DrawerComponent;
