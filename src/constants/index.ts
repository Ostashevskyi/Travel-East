import {
  chinaBg,
  churchLakeKorea,
  gateCloudsKorea,
  japanBg,
  koreaBg,
  oldNewKorea,
} from "./../utils/index";
import {
  arrowsIcn,
  bambooForestJapan,
  bridgeLakeChina,
  chinaHistoryIcn,
  churchChina,
  churchForestJapan,
  churchLionChina,
  churchPeopleKorea,
  churchTreeKorea,
  churchWoodJapan,
  cityLakeKorea,
  cityMountainJapan,
  distanceIcn,
  gateSeaJapan,
  greatWallChina,
  japanCultureIcn,
  koreaInnovationsIcn,
  modernLakeKorea,
} from "../utils";

export const NAV_LISTS = ["Destinations", "Package Deals", "About Us"];

export const HERO_CITY = {
  japan: {
    id: 0,
    title: "Japan",
    bg: japanBg,
    cards: [
      {
        id: 0,
        icon: arrowsIcn,
        title: "3 Big Cities",
        text: "Tokio - Kyoto - Osaka",
      },
      {
        id: 1,
        icon: distanceIcn,
        title: "Distance",
        text: "500+ Km of Landscapes",
      },
      {
        id: 2,
        icon: japanCultureIcn,
        title: "Culture",
        text: "Traditions Of Japan",
      },
    ],
  },
  china: {
    id: 1,
    title: "China",
    bg: chinaBg,
    cards: [
      {
        id: 0,
        icon: arrowsIcn,
        title: "3 Big Cities",
        text: "Beijing - Shanghai - Guang",
      },
      {
        id: 1,
        icon: distanceIcn,
        title: "Distance",
        text: "500+ Km of History",
      },
      {
        id: 2,
        icon: chinaHistoryIcn,
        title: "History",
        text: "Legends Of China",
      },
    ],
  },
  korea: {
    id: 2,
    title: "Korea",
    bg: koreaBg,
    cards: [
      {
        id: 0,
        icon: arrowsIcn,
        title: "3 Big Cities",
        text: "Seoul - Busan - Incheon",
      },
      {
        id: 1,
        icon: distanceIcn,
        title: "Distance",
        text: "500+ Km of Progress",
      },
      {
        id: 2,
        icon: koreaInnovationsIcn,
        title: "Innovations",
        text: "Modernity in Korea",
      },
    ],
  },
};

export const DESTINATIONS_CARDS = [
  {
    id: 0,
    title: "Japan",
    cards: [
      {
        id: 0,
        image: churchWoodJapan,
        title: "Castle Inuyama",
        views: 237,
        destination: "Inuyama",
        type: "long",
      },
      {
        id: 1,
        image: bambooForestJapan,
        title: "Sagano Bamboo Forest",
        views: 216,
        destination: "Kyoto",
      },
      {
        id: 2,
        image: churchForestJapan,
        title: "Kinkaku Temple",
        views: 494,
        destination: "Kyoto",
      },
      {
        id: 3,
        image: cityMountainJapan,
        title: "Mountain Fujisan",
        views: 584,
        destination: "Honshu",
      },
      {
        id: 4,
        image: gateSeaJapan,
        title: "Itsukushima Shrine",
        views: 259,
        destination: "Miyajima",
      },
    ],
  },
  {
    id: 1,
    title: "China",
    cards: [
      {
        id: 0,
        image: churchLionChina,
        title: "Forbidden City",
        views: 330,
        destination: "Beijing",
      },
      {
        id: 1,
        image: bridgeLakeChina,
        title: "Kunming Lake",
        views: 225,
        destination: "Beidaihe",
      },
      {
        id: 2,
        image: churchChina,
        title: "Temple of Heaven",
        views: 286,
        destination: "Beijing",
        type: "long",
      },
      {
        id: 3,
        image: greatWallChina,
        title: "Great Wall Of China",
        views: 645,
        destination: "Beijing",
      },
      {
        id: 4,
        image: cityLakeKorea,
        title: "Summer Palace",
        views: 437,
        destination: "Beijing",
      },
    ],
  },

  {
    id: 2,
    title: "Korea",
    cards: [
      {
        id: 0,
        image: modernLakeKorea,
        title: "National Museum Of Korea",
        views: 589,
        destination: "Seoul",
        type: "wide",
      },
      {
        id: 1,
        image: churchPeopleKorea,
        title: "Park Lotte World",
        views: 228,
        destination: "Seoul",
        type: "long",
      },
      {
        id: 2,
        image: churchTreeKorea,
        title: "Nongeuns Temple",
        views: 364,
        destination: "Seoul",
      },
      {
        id: 3,
        image: churchLakeKorea,
        title: "Chang Palace",
        views: 228,
        destination: "Seoul",
      },
      {
        id: 4,
        image: oldNewKorea,
        title: "Buckcheon",
        views: 313,
        destination: "Seoul",
      },
      {
        id: 5,
        image: gateCloudsKorea,
        title: "Gyeong Palace",
        views: 426,
        destination: "Seoul",
      },
    ],
  },
];
