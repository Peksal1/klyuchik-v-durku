import React, { useCallback, useEffect, useState } from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import "./style.css";

interface GuildInfo {
  name: string;
  realm: string;
  faction: string;
}

interface AboutGuildProviderProps {
  children: React.ReactNode;
}

const AboutGuildProvider: React.FC<AboutGuildProviderProps> = ({
  children,
}) => {
  const [guildInfo, setGuildInfo] = useState<GuildInfo>({
    name: "Loading...",
    realm: "Loading...",
    faction: "Loading...",
  });

  const handleSetGuildInfo = useCallback((data: GuildInfo) => {
    setGuildInfo({
      name: data.name,
      realm: data.realm,
      faction: data.faction.toLowerCase(),
    });
  }, []);

  useEffect(() => {
    async function fetchGuildInfo() {
      const response = await fetch(
        "https://klyuchik-v-durku-backend.herokuapp.com/guild"
      );
      const data = await response.json();
      handleSetGuildInfo(data);
    }

    fetchGuildInfo();
  }, [handleSetGuildInfo]);

  return (
    <AboutGuildContext.Provider value={guildInfo}>
      {children}
    </AboutGuildContext.Provider>
  );
};

const AboutGuildContext = React.createContext<GuildInfo>({
  name: "",
  realm: "",
  faction: "",
});

const AboutGuild = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Приветствуем вас в обновленной гильдии ⭐ Ключик в дурку ⭐</h1>
          <p>
            Устремленной к профессионализму и полному погружению в мир World of
            Warcraft. Мы эволюционировали из казуальной группы в семью настоящих
            семи-хардкорных игроков.
          </p>
          <hr />
          <h3>
            <strong>📅 Плановые рейды:📅</strong>
          </h3>
          <p>
            Среда, Пятница, Суббота в 19:30 (МСК, UTC+3) - наши основные
            рейдовые дни.
          </p>
          <p>
            Четверг и Воскресенье 19:30 (МСК, UTC+3) (не каждые) мы устраиваем
            дополнительные фан-рейды, где каждый игрок может принять участие по
            желанию. Это прекрасная возможность для получения ачивок, одевания
            альтов, первого рейдового опыта и веселого времяпрепровождения.
          </p>
          <hr />
          <h3>
            <strong>⚔️Что предлагает гильдия?⚔️</strong>
          </h3>
          <ul>
            <li>
              <strong>Розыгрыши жетонов в голде:</strong> Каждую неделю мы
              устраиваем розыгрыши эквивалентов 1-3 жетонов в золоте среди
              статической группы. Это отличная мотивация и вознаграждение за
              вашу активность.
            </li>
            <li>
              <strong>Премии и привилегии:</strong> Мы покрываем расходы на
              ремонт экипировки через гильдейский бюджет. Кроме того, пятерым
              лучшим игрокам недели предоставляется доступ к элитному слоту
              гильд-банка, где они могут найти эксклюзивные награды и ресурсы.
            </li>
            <li>
              <strong>Знания и поддержка:</strong> У нас есть опытные игроки,
              готовые поделиться своими знаниями и помочь новичкам и казуальным
              игрокам. Мы стремимся создать дружественную и поддерживающую
              атмосферу в гильдии.
            </li>
            <li>
              <strong>Совместные достижения:</strong> Мы организуем совместное
              выполнение различных достижений, помогая вам достичь "Славы
              рейдера" и других не менее престижных наград.
            </li>
            <li>
              <strong>Интерес к рейтингу:</strong> Мы часто устраиваем
              экспедиции в Mythic+ ключах и у нас в гильдии есть игроки,
              заинтересованные в достижении рейтинга р1 в ключах Mythic+. Если
              вы стремитесь к высоким достижениям в этой области, то у нас вы
              найдете союзников с подобными амбициями. Также гильдмастер лично
              помогает закрывать всем членам статика +20 ключи на вызов, если у
              них нет времени сделать это самим ;)
            </li>
          </ul>
          <hr />
          <h3>
            <strong>👪Востребованные спеки:👪</strong>
          </h3>
          <p>
            Мы не ограничиваемся только определенными спеками, и верим, что
            каждый игрок может внести свой вклад в наш успех. Мы также верим,
            что лучше вы будете БМом раскрывающимся на 100%, чем демон локом,
            который раскрыт на 60% ;) Но при наличии выбора - у нас в данный
            момент востребовано следующее:
          </p>
          <ol>
            <li>хилы (монк, друид, прист)</li>
            <li>рдд (драктир, варлок, шп, шам)</li>
            <li>мили (дк, дх, рога, шам)</li>
          </ol>
          <p>
            Также у нас в гильдии много людей, заинтересованных в ключах,
            которым не хватает танка. Если вы танк с приоритетом на ключи, но
            при этом желаете поддерживать прогресс в рейде, наша гильдия готова
            поддержать вас, допуская к рекилам на замене в рейд.
          </p>
          <hr />
          <h3>📝Свяжитесь с нами:📝</h3>
          <ul>
            <li>
              <strong>Discord (Канал гильдии):</strong>{" "}
              <a href="https://discord.gg/fjVkeJaKjc">Ключик в дурку</a>
            </li>
            <li>
              <strong>Discord (Представители):</strong> Peksal1
            </li>
            <li>
              <strong>Battle.net (Представители):</strong> Peksal1#2832
            </li>
            <li>
              <strong>В игре (Представители):</strong> Хамингодк, Хамингвуд,
              Бродерман, Чоски
            </li>
            <li>
              <strong>Сайт гильдии (в разработке):</strong>{" "}
              <a href="https://www.klyuchik.net/">https://www.klyuchik.net/</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

const Home = () => {
  return (
    <Row>
      <Col xs={12} lg={8}>
        <AboutGuildProvider>
          <AboutGuild />
        </AboutGuildProvider>
      </Col>
      <Col xs={12} lg={4}>
        <Card
          className="mx-auto mt-4 discord-card"
          style={{
            height: "60vh",
          }}
        >
          <Card.Img variant="top" src="/sanitar2.jpg" className="discord-img" />
          <Card.Title className="text-white discord-title">
            Ключик в Дурку
          </Card.Title>

          <Card.Body className="discord-body">
            <Card.Title className="text-white discord-subtitle">
              Заходите в Discord, пообщаемся!
            </Card.Title>
            <Button
              variant="primary"
              href="https://discord.gg/fjVkeJaKjc"
              target="_blank"
              rel="noopener noreferrer"
              className="discord-button"
            >
              Вступить
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default React.memo(Home);
