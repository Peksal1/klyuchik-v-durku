import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./mplus.css";
type Dungeon = {
  name: string;
  timer: string;
  url: string;
};

const dungeons: Dungeon[] = [
  {
    name: "Ульдаман",
    timer: "40:00",
    url: "uldaman",
  },
  {
    name: "Нелтарий",
    timer: "35:00",
    url: "neltharus",
  },
  {
    name: "Лощина Бурошкуров",
    timer: "36:00",
    url: "brackenhide-hollow",
  },
  {
    name: "Чертоги Насыщения",
    timer: "38:00",
    url: "halls-of-infusion",
  },
  {
    name: "Вершина Смерча",
    timer: "30:00",
    url: "vortex-pinnacle",
  },
  {
    name: "Вольная Гавань",
    timer: "33:00",
    url: "freehold",
  },
  {
    name: "Подгнилье",
    timer: "33:00",
    url: "underrot",
  },
  {
    name: "Логово Нелтариона",
    timer: "33:00",
    url: "neltharions-lair",
  },
];
const DungeonPage = () => {
  return (
    <div>
      <h1>Подземелья</h1>
      <Row className="dungeon-grid">
        {dungeons.map((dungeon) => (
          <Col key={dungeon.name} sm={6} md={4} lg={3} xl={2}>
            <Card>
              <Link to={`/df2/mplus/${dungeon.url}`}>
                <Card.Img
                  variant="top"
                  src={`/df2-mplus/${dungeon.url}.jpg`}
                  alt={dungeon.name}
                />
              </Link>
              <Card.Body>
                <Card.Title>{dungeon.name}</Card.Title>
                <Card.Text>Время: {dungeon.timer}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default DungeonPage;
