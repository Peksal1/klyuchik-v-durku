import { useEffect, useState } from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import { GiHealing, GiHeavyHelm, GiSwordsEmblem } from "react-icons/gi";
import { RosterPlayer, rosterPlayers } from "../helpers/data";
import { getClassColor, getColorByScore } from "../helpers/utils";
// import RosterMath from "../weeklyBox";

const RaidSchedule = () => (
  <div>
    <h2>О нашем рейде</h2>
  </div>
);

const RosterCard = ({ rosterPlayer }: { rosterPlayer: RosterPlayer }) => {
  const [playerInfo, setPlayerInfo] = useState<any>({});
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    fetchPlayerWeeklyInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchPlayerWeeklyInfo() {
    const response = await fetch(
      `https://klyuchik-v-durku-backend.herokuapp.com/guild-members/weekly-keys/${rosterPlayer.name}`
    );
    const data = await response.json();
    setPlayerInfo(data);
    setIsPageLoading(false);
  }

  if (isPageLoading) {
    return <div>Загрузка...</div>;
  }
  const getPlayerProgress = (playerInfo: any) => {
    const runs = playerInfo.mythic_plus_weekly_highest_level_runs || [];
    const closed20Count = runs
      .slice(0, 8)
      .filter((run: any) => run?.mythic_level >= 20).length;

    return closed20Count;
  };

  return (
    <Col xs={12} sm={6} md={6} lg={4} xl={3}>
      <Card style={{ margin: "10px", background: "#333333" }}>
        <Row className="align-items-center">
          <Col xs={3} className="text-center">
            <a href={playerInfo.profile_url}>
              <img
                src={playerInfo.thumbnail_url}
                alt="Player Thumbnail"
                style={{ width: "80px", height: "80px", marginLeft: "20px" }}
              />
            </a>
          </Col>
          <Col xs={9}>
            <Card.Body>
              <Card.Title style={{ color: getClassColor(playerInfo.class) }}>
                {playerInfo.name}
              </Card.Title>
              <div style={{ color: "white" }}>
                {playerInfo.active_spec_name} {playerInfo.class}
              </div>
              <div style={{ color: "white" }}>
                {playerInfo.gear.item_level_equipped} Илвл{", "}
                {getPlayerProgress(playerInfo)}/8 викли
              </div>
              <div style={{ color: "white" }}></div>
              <div
                style={{
                  color: getColorByScore(
                    playerInfo.mythic_plus_scores_by_season[0].scores.all
                  ),
                }}
              >
                {playerInfo.mythic_plus_scores_by_season[0].scores.all} Рио
              </div>
              <div>
                {rosterPlayer.mainRoster === "alt" && (
                  <Badge className="badge-info">{rosterPlayer.main}</Badge>
                )}
                {rosterPlayer.mainRoster === "standin" && (
                  <Badge className="badge-secondary">Замена</Badge>
                )}
                {rosterPlayer.mainRoster === "trial" && (
                  <Badge className="badge-info">Пробный</Badge>
                )}
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

const GuildRoster = () => (
  <div className="guild-roster-container">
    <Row>
      <Col>
        <RaidSchedule />
        {/* <RosterMath /> */}
      </Col>
    </Row>
    <Row>
      <Col>
        <h2>
          <GiHeavyHelm style={{ fontSize: "2rem", marginLeft: "10px" }} /> Танки
        </h2>
        <Row>
          {rosterPlayers
            .filter(
              (rosterPlayer) =>
                rosterPlayer.role === "Tank" &&
                rosterPlayer.mainRoster !== "alt"
            )
            .map((rosterPlayer) => (
              <RosterCard key={rosterPlayer.name} rosterPlayer={rosterPlayer} />
            ))}
        </Row>
      </Col>
    </Row>
    <Row>
      <Col>
        <h2>
          <GiHealing style={{ fontSize: "2rem", marginLeft: "10px" }} /> Хилы
        </h2>
        <Row>
          {rosterPlayers
            .filter(
              (rosterPlayer) =>
                rosterPlayer.role === "Healer" &&
                rosterPlayer.mainRoster !== "alt"
            )
            .map((rosterPlayer) => (
              <RosterCard key={rosterPlayer.name} rosterPlayer={rosterPlayer} />
            ))}
        </Row>
      </Col>
    </Row>
    <Row>
      <Col>
        <h2>
          <GiSwordsEmblem style={{ fontSize: "2rem", marginLeft: "10px" }} /> ДД
        </h2>
        <Row>
          {rosterPlayers
            .filter(
              (rosterPlayer) =>
                rosterPlayer.role === "DPS" && rosterPlayer.mainRoster !== "alt"
            )
            .map((rosterPlayer) => (
              <RosterCard key={rosterPlayer.name} rosterPlayer={rosterPlayer} />
            ))}
        </Row>
      </Col>
    </Row>
    <Row>
      <Col>
        <h2>
          <FaUserAlt style={{ fontSize: "2rem", marginLeft: "10px" }} /> Альты
        </h2>
        <Row>
          {rosterPlayers
            .filter((rosterPlayer) => rosterPlayer.mainRoster === "alt")
            .map((rosterPlayer) => (
              <RosterCard key={rosterPlayer.name} rosterPlayer={rosterPlayer} />
            ))}
        </Row>
      </Col>
    </Row>
  </div>
);
export default GuildRoster;
