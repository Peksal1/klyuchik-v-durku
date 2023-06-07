export interface RosterPlayer {
  name: string;
  role: string;
  mainRoster: string;
}

export const rosterPlayers: RosterPlayer[] = [
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
