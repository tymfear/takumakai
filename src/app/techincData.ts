export enum Waza {
  Idori = 'Idori',
  Tachiai = 'Tachiai',
  HanzaHandachi = 'HanzaHandachi',
  Ushiro = 'Ushiro',
}

export enum Level {
  Kyu_6 = '6 kyu',
  Kyu_5 = '5 kyu',
  Kyu_4 = '4 kyu',
  Kyu_3 = '3 kyu',
  Kyu_2 = '2 kyu',
  Kyu_1 = '1 kyu',
  Shodan = 'Shodan',
}

export interface Technic {
  waza: Waza;
  level: Level[];
  name: string;
  id: number;
}

export const TECHNICS: Technic[] = [
  {
    id: 1,
    level: [Level.Kyu_1, Level.Kyu_2, Level.Kyu_3, Level.Kyu_4, Level.Kyu_5, Level.Kyu_6, Level.Shodan],
    name: 'Ippondori',
    waza: Waza.Idori
  },
  {
    id: 2,
    level: [Level.Kyu_1, Level.Kyu_2, Level.Kyu_3, Level.Kyu_4, Level.Kyu_5, Level.Kyu_6, Level.Shodan],
    name: 'Gyakuudedori',
    waza: Waza.Idori
  },
  {
    id: 3,
    level: [Level.Kyu_1, Level.Kyu_2, Level.Kyu_3, Level.Kyu_4, Level.Kyu_5, Level.Shodan],
    name: 'Hijigaeshi',
    waza: Waza.Idori
  },
  {
    id: 4,
    level: [Level.Kyu_1, Level.Kyu_2, Level.Kyu_3, Level.Kyu_4, Level.Kyu_5, Level.Shodan],
    name: 'Kurumadaoshi',
    waza: Waza.Idori
  },
  {
    id: 5,
    level: [Level.Kyu_1, Level.Kyu_2, Level.Kyu_3, Level.Kyu_4, Level.Shodan],
    name: 'Shiborigaeshi',
    waza: Waza.Idori
  },
  {
    id: 6,
    level: [Level.Kyu_1, Level.Kyu_2, Level.Kyu_3, Level.Kyu_4, Level.Shodan],
    name: 'Dakijime',
    waza: Waza.Idori
  },
  {
    id: 7,
    level: [Level.Kyu_1, Level.Kyu_2, Level.Kyu_3, Level.Shodan],
    name: 'Karamenage',
    waza: Waza.Idori
  },
  {
    id: 8,
    level: [Level.Kyu_1, Level.Kyu_2, Level.Kyu_3, Level.Kyu_4, Level.Shodan],
    name: 'Kotegaeshi',
    waza: Waza.Idori
  },
  {
    id: 9,
    level: [Level.Kyu_1, Level.Kyu_2, Level.Kyu_3, Level.Shodan],
    name: 'Nukitedori',
    waza: Waza.Idori
  },
  {
    id: 10,
    level: [Level.Kyu_1, Level.Kyu_2, Level.Kyu_3, Level.Shodan],
    name: 'Hizajime',
    waza: Waza.Idori
  },
  {
    id: 11,
    level: [Level.Kyu_1, Level.Kyu_2, Level.Kyu_3, Level.Kyu_4, Level.Kyu_5, Level.Kyu_6, Level.Shodan],
    name: 'Ippondori',
    waza: Waza.Tachiai
  },
  {
    id: 12,
    level: [Level.Kyu_1, Level.Kyu_2, Level.Kyu_3, Level.Kyu_4, Level.Kyu_5, Level.Shodan],
    name: 'Kurumadaoshi',
    waza: Waza.Tachiai
  },
  {
    id: 13,
    level: [Level.Kyu_1, Level.Kyu_2, Level.Kyu_3, Level.Kyu_4, Level.Kyu_5, Level.Kyu_6, Level.Shodan],
    name: 'Gyakuudadori',
    waza: Waza.Tachiai
  },
  {
    id: 14,
    level: [Level.Kyu_1, Level.Kyu_2, Level.Kyu_3, Level.Kyu_4, Level.Shodan],
    name: 'Koshiguruma',
    waza: Waza.Tachiai
  },
  {
    id: 15,
    level: [Level.Kyu_1, Level.Kyu_2, Level.Kyu_3, Level.Shodan],
    name: 'Karamenage',
    waza: Waza.Tachiai
  },
  {
    id: 16,
    level: [Level.Kyu_1, Level.Kyu_2, Level.Kyu_3, Level.Kyu_4, Level.Kyu_5, Level.Shodan],
    name: 'Uraotoshi',
    waza: Waza.Tachiai
  },
  {
    id: 17,
    level: [Level.Kyu_1, Level.Kyu_2, Level.Kyu_3, Level.Kyu_4, Level.Shodan],
    name: 'Obiotoshi',
    waza: Waza.Tachiai
  },
  {
    id: 18,
    level: [Level.Kyu_1, Level.Kyu_2, Level.Kyu_3, Level.Shodan],
    name: 'Kirikaeshi',
    waza: Waza.Tachiai
  },
  {
    id: 19,
    level: [Level.Kyu_1, Level.Kyu_2, Level.Kyu_3, Level.Kyu_4, Level.Shodan],
    name: 'Kotegaeshi',
    waza: Waza.Tachiai
  },
  {
    id: 20,
    level: [Level.Kyu_1, Level.Kyu_2, Level.Kyu_3, Level.Shodan],
    name: 'Shihonage',
    waza: Waza.Tachiai
  },
  {
    id: 21,
    level: [Level.Kyu_1, Level.Kyu_2, Level.Shodan],
    name: 'Tachierodori',
    waza: Waza.Ushiro
  },
  {
    id: 22,
    level: [Level.Kyu_1, Level.Kyu_2, Level.Shodan],
    name: 'Ryoukatahineri',
    waza: Waza.Ushiro
  },
  {
    id: 23,
    level: [Level.Kyu_1, Level.Kyu_2, Level.Shodan],
    name: 'Ryouhijigaeshi',
    waza: Waza.Ushiro
  },
  {
    id: 24,
    level: [Level.Kyu_1, Level.Kyu_2, Level.Shodan],
    name: 'Dakijimedori',
    waza: Waza.Ushiro
  },
  {
    id: 25,
    level: [Level.Kyu_1, Level.Kyu_2, Level.Shodan],
    name: 'Kataotoshi',
    waza: Waza.Ushiro
  },
  {
    id: 26,
    level: [Level.Kyu_1, Level.Shodan],
    name: 'Hanminage',
    waza: Waza.HanzaHandachi
  },
  {
    id: 27,
    level: [Level.Kyu_1, Level.Shodan],
    name: 'Uraotoshi',
    waza: Waza.HanzaHandachi
  },
  {
    id: 28,
    level: [Level.Kyu_1, Level.Shodan],
    name: 'Izori',
    waza: Waza.HanzaHandachi
  },
  {
    id: 29,
    level: [Level.Kyu_1, Level.Shodan],
    name: 'Kataotoshi',
    waza: Waza.HanzaHandachi
  },
  {
    id: 30,
    level: [Level.Kyu_1, Level.Shodan],
    name: 'Iriminage',
    waza: Waza.HanzaHandachi
  },
];
