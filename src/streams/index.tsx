import { Tab, Nav, Card } from "react-bootstrap";

const StreamPage = () => {
  return (
    <div style={{ display: "flex", height: "100%", overflow: "hidden" }}>
      <Tab.Container id="left-tabs" defaultActiveKey="1">
        <Nav
          variant="pills"
          className="flex-column"
          style={{ height: "100%", flex: 1 }}
        >
          <Nav.Item>
            <Nav.Link eventKey="1">Бродерман</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2">Peksal1</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content style={{ height: "100%", flex: 1 }}>
          <Tab.Pane eventKey="1">
            <Card style={{ height: "100%" }}>
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
          </Tab.Pane>
          <Tab.Pane eventKey="2">
            <h2>Здесь будет контент для второй вкладки</h2>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default StreamPage;
