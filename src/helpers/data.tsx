export interface RosterPlayer {
  name: string;
  role: "DPS" | "Tank" | "Healer";
  mainRoster: "main" | "standin" | "trial" | "alt";
  main?: string;
}

export const rosterPlayers: RosterPlayer[] = [
  { name: "Флексаняша", role: "DPS", mainRoster: "main" },
  { name: "Хамингодк", role: "Tank", mainRoster: "main" },
  { name: "Аирфлекс", role: "Tank", mainRoster: "main" },
  { name: "Халдр", role: "DPS", mainRoster: "main" },
  { name: "Каррта", role: "Healer", mainRoster: "main" },
  { name: "Алаурс", role: "DPS", mainRoster: "main" },
  { name: "Мунлаийт", role: "DPS", mainRoster: "trial" },
  { name: "Клиерма", role: "Healer", mainRoster: "main" },
  { name: "Чоски", role: "Healer", mainRoster: "main" },
  { name: "Ура", role: "Healer", mainRoster: "main" },
  { name: "Грациятьмы", role: "Healer", mainRoster: "main" },
  { name: "Фрегас", role: "DPS", mainRoster: "main" },
  { name: "Щугадэди", role: "DPS", mainRoster: "main" },
  { name: "Гачистрф", role: "DPS", mainRoster: "main" },
  { name: "Мферр", role: "DPS", mainRoster: "main" },
  { name: "Абмудок", role: "DPS", mainRoster: "main" },
  { name: "Хэллскон", role: "DPS", mainRoster: "main" },
  { name: "Доррети", role: "DPS", mainRoster: "main" },
  { name: "Кромь", role: "DPS", mainRoster: "main" },
  { name: "Анурэль", role: "DPS", mainRoster: "main" },
  { name: "Аэльдрим", role: "DPS", mainRoster: "main" },
  { name: "Кларок", role: "DPS", mainRoster: "main" },
  { name: "Акстрил", role: "DPS", mainRoster: "main" },
  { name: "Дайтехапку", role: "DPS", mainRoster: "main" },
  { name: "Ялюблюквас", role: "DPS", mainRoster: "standin" },
  { name: "Макэль", role: "DPS", mainRoster: "standin" },
  { name: "Воксхолл", role: "DPS", mainRoster: "standin" },
  { name: "Кенитель", role: "DPS", mainRoster: "standin" },
  { name: "Рашиндос", role: "DPS", mainRoster: "standin" },
  { name: "Шукашилётигр", role: "Healer", mainRoster: "standin" },
  { name: "Умбарс", role: "Healer", mainRoster: "trial" },
  { name: "Локаутт", role: "DPS", mainRoster: "trial" },
  { name: "Люциферб", role: "DPS", mainRoster: "trial" },
  { name: "Флоцка", role: "Healer", mainRoster: "alt", main: "Клиерма" },
  { name: "Кайлендер", role: "DPS", mainRoster: "alt", main: "Хамингодк" },
  { name: "Хеллскон", role: "DPS", mainRoster: "trial", main: "Хэллскон" },
  { name: "Лератель", role: "Tank", mainRoster: "alt", main: "Хамингодк" },
];

export interface Guide {
  id: number;
  image: string;
  link: string;
  name: string;
  description: string;
  tag: string;
}

export const guides: Guide[] = [
  {
    id: 1,
    image: "https://media.wago.io/cards/ak3iS95aa/c-1682987110859.jpg",
    link: "https://wago.io/ak3iS95aa",
    name: "Плейтер ГМа",
    description:
      "Достаточно удобный для ключей, подходит для всех ролей + удобно смотрится с ВАшкой на КД абилок враждебных целей.",
    tag: "Плейтер",
  },
  {
    id: 2,
    image:
      "https://media.wago.io/screenshots/B-saNwgCJ/6438294259d40fc4ff1f3cee.png",
    link: "https://wago.io/CooldownsOnNameplate",
    name: "КД абилок врагов",
    description:
      "ВА в дополнению к плейтеру, около плашки хп противника идут таймеры на их абилки. Очень удобно для ключей, в рейде тоже полезно бывает",
    tag: "ВАшка",
  },
  // Add more guide objects as needed
];
