import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Badge } from "react-bootstrap";
import { GiSwordsEmblem, GiHealing, GiHeavyHelm } from "react-icons/gi";
import { getClassColor } from "../helpers/utils";

interface Player {
  name: string;
  role: string;
  mainRoster: string; // Updated to string type
}

const players: Player[] = [
  { name: "Флексаняша", role: "Tank", mainRoster: "main" },
  { name: "Халдр", role: "Tank", mainRoster: "main" },
  { name: "Каррта", role: "Healer", mainRoster: "main" },
  { name: "Клиерма", role: "Healer", mainRoster: "main" },
  { name: "Чоски", role: "Healer", mainRoster: "main" },
  { name: "Ура", role: "Healer", mainRoster: "main" },
  { name: "Умбарс", role: "Healer", mainRoster: "trial" },
  { name: "Кайлендер", role: "DPS", mainRoster: "main" },
  { name: "Фрегас", role: "DPS", mainRoster: "main" },
  { name: "Щугадэди", role: "DPS", mainRoster: "main" },
  { name: "Гачистрф", role: "DPS", mainRoster: "main" },
  { name: "Абмудок", role: "DPS", mainRoster: "main" },
  { name: "Доррети", role: "DPS", mainRoster: "main" },
  { name: "Кромь", role: "DPS", mainRoster: "main" },
  { name: "Воксхолл", role: "DPS", mainRoster: "main" },
  { name: "Аэльдрим", role: "DPS", mainRoster: "main" },
  { name: "Кларок", role: "DPS", mainRoster: "main" },
  { name: "Акстрил", role: "DPS", mainRoster: "main" },
  { name: "Дайтехапку", role: "DPS", mainRoster: "main" },
  { name: "Балантиель", role: "DPS", mainRoster: "standin" },
  { name: "Хеллскон", role: "DPS", mainRoster: "trial" },
  { name: "Анурэль", role: "DPS", mainRoster: "trial" },
];

const RaidSchedule = () => (
  <div>
    <h2>О нашем рейде</h2>
    {/* Add your raid time and needed specs here */}
  </div>
);

const RosterCard = ({ player }: { player: Player }) => {
  const [playerInfo, setPlayerInfo] = useState<any>({});
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    fetchPlayerWeeklyInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchPlayerWeeklyInfo() {
    const response = await fetch(
      `https://klyuchik-v-durku-backend.herokuapp.com/guild-members/weekly-keys/${player.name}`
    );
    const data = await response.json();
    setPlayerInfo(data);
    setIsPageLoading(false);
  }

  if (isPageLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <Card style={{ width: "12rem", margin: "10px" }}>
      <Card.Img
        variant="top"
        src={playerInfo.thumbnail_url}
        style={{ maxWidth: "100%", maxHeight: "150px" }}
      />
      <Card.Body>
        <Card.Title style={{ color: getClassColor(playerInfo.class) }}>
          {playerInfo.name}
        </Card.Title>
        <div>
          {player.mainRoster === "standin" && (
            <Badge className="badge-secondary">Замена</Badge>
          )}
          {player.mainRoster === "trial" && (
            <Badge className="badge-info">Пробный</Badge>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

const GuildRoster = () => (
  <Container>
    <Row>
      <Col>
        <RaidSchedule />
      </Col>
    </Row>
    <Row>
      <Col>
        <h2>
          <GiHeavyHelm style={{ fontSize: "2rem" }} /> Танки
        </h2>
        <Row>
          {players
            .filter((player) => player.role === "Tank")
            .map((player) => (
              <RosterCard key={player.name} player={player} />
            ))}
        </Row>
      </Col>
    </Row>
    <Row>
      <Col>
        <h2>
          <GiHealing style={{ fontSize: "2rem" }} /> Хилы
        </h2>
        <Row>
          {players
            .filter((player) => player.role === "Healer")
            .map((player) => (
              <RosterCard key={player.name} player={player} />
            ))}
        </Row>
      </Col>
    </Row>
    <Row>
      <Col>
        <h2>
          <GiSwordsEmblem style={{ fontSize: "2rem" }} /> ДД
        </h2>
        <Row>
          {players
            .filter((player) => player.role === "DPS")
            .map((player) => (
              <RosterCard key={player.name} player={player} />
            ))}
        </Row>
      </Col>
    </Row>
  </Container>
);

export default GuildRoster;
