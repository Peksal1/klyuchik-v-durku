import React, { useState } from "react";
import { Accordion, Button } from "react-bootstrap";
import { HiArrowNarrowLeft } from "react-icons/hi"; // Import the required icon
import { Link } from "react-router-dom";
import "./DrawerComponent.css"; // Import CSS file for styling

type DrawerProps = {
  show: boolean;
  onClose: () => void;
  drawerType: "system" | "guides" | "status";
};

const DrawerComponent: React.FC<DrawerProps> = ({
  show,
  onClose,
  drawerType,
}) => {
  const [selectedItem, setSelectedItem] = useState<string>(""); // Track the selected item

  const handleItemClick = (itemName: string) => {
    setSelectedItem(itemName); // Update the selected item
  };

  const renderAccordionButtons = () => {
    switch (drawerType) {
      case "guides":
        return (
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>DragonFlight Season 2</Accordion.Header>
              <Accordion.Body>
                <div className="buttons-container">
                  <Link to="/df2/mplus">
                    <Button
                      variant="outline-primary"
                      className={`drawer-button ${
                        selectedItem === "Button 5" ? "active" : ""
                      }`}
                      onClick={() => handleItemClick("Button 5")}
                    >
                      Эпохальный+
                    </Button>
                  </Link>
                  <Link to="/df2/raid">
                    <Button
                      variant="outline-primary"
                      className={`drawer-button ${
                        selectedItem === "Button 6" ? "active" : ""
                      }`}
                      onClick={() => handleItemClick("Button 6")}
                    >
                      Рейды
                    </Button>
                  </Link>
                  <Link to="/df2/features">
                    <Button
                      variant="outline-primary"
                      className={`drawer-button ${
                        selectedItem === "Button 7" ? "active" : ""
                      }`}
                      onClick={() => handleItemClick("Button 7")}
                    >
                      Классовые фишки
                    </Button>
                  </Link>
                  <Link to="/df2/useful">
                    <Button
                      variant="outline-primary"
                      className={`drawer-button ${
                        selectedItem === "Button 8" ? "active" : ""
                      }`}
                      onClick={() => handleItemClick("Button 8")}
                    >
                      Полезные вещи
                    </Button>
                  </Link>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>DragonFlight Season 1</Accordion.Header>
              <Accordion.Body>
                <div className="buttons-container">
                  <Link to="/df1/mplus">
                    <Button
                      variant="outline-primary"
                      className={`drawer-button ${
                        selectedItem === "Button 1" ? "active" : ""
                      }`}
                      onClick={() => handleItemClick("Button 1")}
                    >
                      Эпохальный+
                    </Button>
                  </Link>
                  <Link to="/df1/raid">
                    <Button
                      variant="outline-primary"
                      className={`drawer-button ${
                        selectedItem === "Button 2" ? "active" : ""
                      }`}
                      onClick={() => handleItemClick("Button 2")}
                    >
                      Рейды
                    </Button>
                  </Link>
                  <Button
                    variant="outline-primary"
                    className={`drawer-button ${
                      selectedItem === "Button 3" ? "active" : ""
                    }`}
                    onClick={() => handleItemClick("Button 3")}
                  >
                    Классовые фишки
                  </Button>
                  <Button
                    variant="outline-primary"
                    className={`drawer-button ${
                      selectedItem === "Button 4" ? "active" : ""
                    }`}
                    onClick={() => handleItemClick("Button 4")}
                  >
                    Полезные вещи
                  </Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {show && <div className="overlay" onClick={onClose} />}
      <div className={`drawer ${show ? "open" : ""}`}>
        <div className="drawer-header">
          <h3>Категории</h3>
          <button className="close-button" onClick={onClose}>
            <HiArrowNarrowLeft /> {/* Use the hamburger with left arrow icon */}
          </button>
        </div>
        <div className="drawer-body">{renderAccordionButtons()}</div>
      </div>
    </>
  );
};

export default DrawerComponent;
