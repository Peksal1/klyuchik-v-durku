import React, { useState } from "react";
import { Tab, Tabs, Card } from "react-bootstrap";

const StreamPage = () => {
  const [activeTab, setActiveTab] = useState("1");

  const handleTabChange = (key: any) => {
    setActiveTab(key);
  };

  return (
    <div className="stream-page">
      <Tabs
        className="stream-tabs"
        activeKey={activeTab}
        onSelect={handleTabChange}
        id="stream-tabs"
      >
        <Tab eventKey="1" title="Бродерман" className="tab-pane">
          <Card className="stream-card">
            <iframe
              src="https://widgets.sociablekit.com/twitch-live-videos/iframe/124673"
              title="Peksal1"
              width="100%"
              style={{ border: "none" }}
              height="670"
            ></iframe>
            <Card.Body>
              <Card.Title>Описание канала</Card.Title>
              <Card.Text>Здесь может быть ваше описание канала.</Card.Text>
              <Card.Title>Случайные клипы Twitch</Card.Title>
              <Card.Text>Здесь будут случайные клипы Twitch.</Card.Text>
            </Card.Body>
          </Card>
        </Tab>
        <Tab eventKey="2" title="Peksal1" className="tab-pane">
          <h2>Здесь будет контент для второй вкладки</h2>
        </Tab>
      </Tabs>
    </div>
  );
};

export default StreamPage;
