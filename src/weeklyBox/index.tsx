import { useEffect, useState } from "react";
import { Badge, Container, ProgressBar } from "react-bootstrap";
import { RosterPlayer, rosterPlayers } from "../helpers/data";
import "./index.css";

const RosterMath = () => {
  const [playerInfo, setPlayerInfo] = useState<any>({});
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    fetchPlayerInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchPlayerInfo() {
    const promises = rosterPlayers.map((player) =>
      fetchPlayerWeeklyInfo(player)
    );
    Promise.all(promises)
      .then((data) => {
        const playerData: any = {};
        data.forEach((result, index) => {
          const playerName = rosterPlayers[index].name;
          playerData[playerName] = result;
        });
        setPlayerInfo(playerData);
        setIsPageLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching player info:", error);
      });
  }

  async function fetchPlayerWeeklyInfo(player: RosterPlayer) {
    const response = await fetch(
      `https://klyuchik-v-durku-backend.herokuapp.com/guild-members/weekly-keys/${player.name}`
    );
    const data = await response.json();
    return data;
  }

  if (isPageLoading) {
    return <div>Loading player info...</div>;
  }

  const getPlayerColor = (player: RosterPlayer) => {
    const runs =
      playerInfo[player.name]?.mythic_plus_weekly_highest_level_runs || [];
    const closed20Count = runs
      .slice(0, 8)
      .filter((run: any) => run?.mythic_level >= 20).length;

    if (closed20Count === 8) {
      return "green";
    } else if (closed20Count >= 1) {
      return "yellow";
    } else {
      return "empty";
    }
  };

  const getPlayerProgress = (player: RosterPlayer) => {
    const runs =
      playerInfo[player.name]?.mythic_plus_weekly_highest_level_runs || [];
    const closed20Count = runs
      .slice(0, 8)
      .filter((run: any) => run?.mythic_level >= 20).length;

    return closed20Count;
  };

  const sortedPlayers = [...rosterPlayers].sort((a, b) => {
    const aRuns =
      playerInfo[a.name]?.mythic_plus_weekly_highest_level_runs || [];
    const bRuns =
      playerInfo[b.name]?.mythic_plus_weekly_highest_level_runs || [];

    const aClosed20Count = aRuns
      .slice(0, 8)
      .filter((run: any) => run?.mythic_level >= 20).length;

    const bClosed20Count = bRuns
      .slice(0, 8)
      .filter((run: any) => run?.mythic_level >= 20).length;

    if (aClosed20Count === bClosed20Count) {
      return a.name.localeCompare(b.name);
    } else {
      return aClosed20Count - bClosed20Count;
    }
  });

  return (
    <Container className="roster-container">
      <h2>Закрытые викли</h2>
      <div className="roster-list">
        {sortedPlayers.map((player, index) => (
          <div
            key={player.name}
            className={`player-cell ${getPlayerColor(player)}`}
          >
            <div className="player-info">
              <Badge className="player-name">{player.name}</Badge>
              {getPlayerProgress(player)}/8
              <div className="player-progress">
                <ProgressBar
                  now={getPlayerProgress(player)}
                  max={8}
                  striped
                  variant={getPlayerColor(player)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default RosterMath;
