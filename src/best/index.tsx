import React, { useCallback, useEffect, useState } from "react";
import {
  Button,
  Card,
  FormControl,
  InputGroup,
  ListGroup,
  Spinner,
} from "react-bootstrap";
import PlayerInfoModal from "./PlayerInfoModal.tsx";
import CustomPagination from "../CustomPagination.tsx";
import { getClassColor } from "../helpers/utils.tsx";

export interface GuildMember {
  character: {
    name: string;
    class: string;
    active_spec_name: string;
    profile_url: string;
    achievement_points: number;
  };
  rank: number;
}

const PAGE_SIZE = 40;

const GuildMembers: React.FC = () => {
  const [members, setMembers] = useState<GuildMember[]>([]);
  const [page, setPage] = useState<number>(1);
  const [classFilter, setClassFilter] = useState<string>("");
  const [playerInfoModalVisible, setPlayerModalVisible] = useState(false);
  const [playerInfo, setPlayerInfo] = useState(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    async function fetchGuildMembers() {
      const response = await fetch(
        "https://klyuchik-v-durku-backend.herokuapp.com/guild-members"
      );
      const data = await response.json();
      setMembers(data as GuildMember[]);
      setIsPageLoading(false);
    }

    fetchGuildMembers();
  }, []);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const filteredMembers = members.filter((member) =>
    member.character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const classFilteredMembers = classFilter
    ? filteredMembers.filter((member) => member.character.class === classFilter)
    : filteredMembers;
  const sortedMembers = classFilteredMembers.sort((a, b) => a.rank - b.rank);
  const displayedMembers = sortedMembers.slice(startIndex, endIndex);
  const groupedMembers: { [key: number]: GuildMember[] } = Object.entries(
    displayedMembers.reduce<{ [key: number]: GuildMember[] }>((acc, member) => {
      if (!acc[member.rank]) {
        acc[member.rank] = [];
      }
      acc[member.rank].push(member);
      return acc;
    }, {})
  ).reduce<{ [key: number]: GuildMember[] }>((acc, [rank, members]) => {
    acc[parseInt(rank)] = members;
    return acc;
  }, {});

  function getRankName(rank: string): string {
    switch (rank) {
      case "0":
        return "ГМ";
      case "1":
        return "Зам ГМ";
      case "2":
        return "Альт Офицера";
      case "3":
        return "Резчик Лука";
      case "4":
        return "Статик";
      case "5":
        return "Завсегдатай";
      case "6":
        return "Стас";
      case "7":
        return "Местный";
      case "8":
        return "Альт";
      case "9":
        return "Посетитель";
      default:
        return "";
    }
  }

  const handleSetClassFilter = useCallback((value: string) => {
    setClassFilter(value);
    setPage(1);
  }, []);

  const handleSetSearchValue = useCallback((value: string) => {
    setSearchTerm(value);
    setPage(1);
  }, []);

  const handleOpenPlayerModal = useCallback((name: string) => {
    setPlayerModalVisible(true);
    async function fetchPlayerWeeklyInfo() {
      const response = await fetch(
        `https://klyuchik-v-durku-backend.herokuapp.com/guild-members/weekly-keys/${name}`
      );
      const data = await response.json();
      setPlayerInfo(data);
      setIsPageLoading(false);
    }

    fetchPlayerWeeklyInfo();
  }, []);

  const handleClosePlayerModal = useCallback(() => {
    setPlayerModalVisible(false);
    setPlayerInfo(null);
  }, []);

  return isPageLoading ? (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Spinner animation="border" variant="primary" />
    </div>
  ) : (
    <>
      {playerInfo && (
        <PlayerInfoModal
          playerInfoModalVisible={playerInfoModalVisible}
          handleClosePlayerModal={handleClosePlayerModal}
          playerInfo={playerInfo}
        />
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 16,
        }}
      >
        <InputGroup style={{ width: "300px", marginTop: "20px" }}>
          <FormControl
            placeholder="Поиск по имени персонажа"
            onChange={(e) => handleSetSearchValue(e.target.value)}
          />
        </InputGroup>
        <FormControl
          as="select"
          defaultValue=""
          style={{ marginLeft: 16, width: 200, marginTop: 20, marginRight: 20 }}
          onChange={(e) => handleSetClassFilter(e.target.value)}
        >
          <option value="">Все классы</option>
          <option value="Warrior">Воин</option>
          <option value="Paladin">Паладин</option>
          <option value="Hunter">Охотник</option>
          <option value="Rogue">Разбойник</option>
          <option value="Priest">Жрец</option>
          <option value="Shaman">Шаман</option>
          <option value="Mage">Маг</option>
          <option value="Warlock">Чернокнижник</option>
          <option value="Druid">Друид</option>
        </FormControl>
      </div>
      {Object.entries(groupedMembers as [GuildMember[]]).map(
        ([rank, members]) => (
          <div key={`rank-${rank}`}>
            <h2 style={{ marginLeft: 20 }}> {getRankName(rank)}</h2>
            <ListGroup style={{ marginRight: 20, marginLeft: 20 }}>
              {members
                .filter((member) => {
                  const nameMatch = member.character.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
                  const classMatch = classFilter
                    ? member.character.class === classFilter
                    : true;
                  return nameMatch && classMatch;
                })
                .map((member) => (
                  <ListGroup.Item key={member.character.name}>
                    <Card>
                      <Card.Img
                        variant="top"
                        src={`/spec/${member.character.class}/${member.character.active_spec_name}.png`}
                        style={{
                          marginTop: 20,
                          marginLeft: 20,
                          width: 64,
                          height: 64,
                        }}
                      />
                      <Card.Body>
                        <Card.Title>
                          <a
                            style={{
                              color:
                                member.character.class !== "Priest"
                                  ? getClassColor(member.character.class)
                                  : "black",
                            }}
                            href={member.character.profile_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {member.character.name}
                          </a>
                        </Card.Title>
                        <Card.Text>
                          {`${member.character.active_spec_name} ${member.character.class}`}
                        </Card.Text>
                        <Card.Text style={{ marginTop: 5 }}>
                          {`${member.character.achievement_points} Очков достижений`}
                        </Card.Text>
                        <Button
                          style={{ alignContent: "flex-end", display: "flex" }}
                          onClick={() =>
                            handleOpenPlayerModal(member.character.name)
                          }
                        >
                          Подробнее
                        </Button>
                      </Card.Body>
                    </Card>
                  </ListGroup.Item>
                ))}
            </ListGroup>
          </div>
        )
      )}
      <CustomPagination
        page={page}
        pageSize={PAGE_SIZE}
        totalItems={members.length}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default GuildMembers;
