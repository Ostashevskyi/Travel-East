import {
  chinaBg,
  churchLakeKorea,
  cityAirKorea,
  cityFestivalChina,
  cityLampsChina,
  cityModernKorea,
  cityRiverChina,
  cityRiverJapan,
  cityWalkJapan,
  gateCloudsKorea,
  girlBlondeFeedbackImg,
  girlDarkEyeFeedbackImg,
  japanBg,
  koreaBg,
  manFeedbackImg,
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

export const NAV_LISTS = [
  { name: "Destinations", anchor: "#destinations" },
  { name: "Package Deals", anchor: "#deals" },
  { name: "About Us", anchor: "#about" },
  { name: "Feedbacks", anchor: "#feedbacks" },
];

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

export const DELAS_CARDS = [
  {
    id: 0,
    title: "Japan",
    cards: [
      {
        id: 0,
        title: "Cultural heritage of Japan",
        short_description: "Tokio - Kyoto - Osaka | 500+ km",
        image: cityWalkJapan,
        image_alt: "Walking people in Japan City",
        old_price: 1599,
        new_price: 1399,
        stars: 5,
        comments_count: 87,
        avg_rating: 4.9,
        description:
          "Visit traditional sakura gardens, tea ceremonies and the birthplace of sushi",
        days: 7,
      },
      {
        id: 1,
        title: "Thermal vacation in Japan",
        short_description: "Tokio - Hakone - Nara | 500+ km",
        image: cityRiverJapan,
        image_alt: "House nearby river",
        old_price: 1399,
        new_price: 1199,
        stars: 5,
        comments_count: 64,
        avg_rating: 4.8,
        description:
          "Relax in Hakone's hot springs, visit Nara's deer park, and enjoy traditional Onsen baths",
        days: 6,
      },
      {
        id: 2,
        title: "Gastronomic delights of Japan",
        short_description: "Tokio - Hokkaido - Kyoto | 500+ km",
        image: cityMountainJapan,
        image_alt: "View on the Japan city",
        old_price: 1299,
        new_price: 1099,
        stars: 4.5,
        comments_count: 71,
        avg_rating: 4.6,
        description:
          "Visit traditional sakura gardens, tea ceremonies and the birthplace of sushi",
        days: 7,
      },
    ],
  },
  {
    id: 1,
    title: "China",
    cards: [
      {
        id: 0,
        title: "A wonder of Chinese culture",
        short_description: "Beijing - Xi'an - Shanghai | 500+ km",
        image: cityLampsChina,
        image_alt: "Lamps in temple",
        old_price: 1699,
        new_price: 1499,
        stars: 5,
        comments_count: 113,
        avg_rating: 4.9,
        description:
          "Explore the great wall of china in beijing, visit the terracotta army in xian and enjoy modernity in shanghai",
        days: 8,
      },
      {
        id: 1,
        title: "Zodiacal adventures of China",
        short_description: "Guangzhou - Xi'an - Hong Kong | 500+ km",
        image: cityRiverChina,
        image_alt: "House nearby river",
        old_price: 1599,
        new_price: 1399,
        stars: 5,
        comments_count: 91,
        avg_rating: 4.9,
        description:
          "Discover Guangzhou's Bear Acorn Majesty, Chengdu's Panda Reserve, and Hong Kong's mystique.",
        days: 7,
      },
      {
        id: 2,
        title: "Culinary Travels of China",
        short_description: "Shanghai - Guang - Hong Kong  | 500+ km",
        image: cityFestivalChina,
        image_alt: "Festival in China",
        old_price: 1499,
        new_price: 1299,
        stars: 5,
        comments_count: 79,
        avg_rating: 4.8,
        description:
          "Taste delicious Chinese cuisine in famous restaurants in Shanghai, Guan and Hong Kong",
        days: 7,
      },
    ],
  },
  {
    id: 2,
    title: "Korea",
    cards: [
      {
        id: 0,
        title: "modern seoul",
        short_description: "Seoul - incheon - busan | 500+ km",
        image: cityAirKorea,
        image_alt: "City in Korea",
        old_price: 1499,
        new_price: 1299,
        stars: 5,
        comments_count: 70,
        avg_rating: 4.8,
        description:
          "Explore Seoul's modern streets, Incheon's historical sites, and Busan's beaches.",
        days: 7,
      },
      {
        id: 1,
        title: "Cultural heritage of Korea",
        short_description: "Kyongju - Hanson - Daegu | 500+ km",
        image: cityLakeKorea,
        image_alt: "House nearby lake",
        old_price: 1399,
        new_price: 1199,
        stars: 5,
        comments_count: 54,
        avg_rating: 4.8,
        description:
          "Discover Gyeongju's ancient temples, Hanseong's maritime culture, and Daegu's museums.",
        days: 6,
      },
      {
        id: 2,
        title: "Flavors of South Korea",
        short_description: "Seoul - jeju - jeongju | 500+ km",
        image: cityModernKorea,
        image_alt: "Modern city in Korea",
        old_price: 1299,
        new_price: 1099,
        stars: 4.5,
        comments_count: 50,
        avg_rating: 4.5,
        description:
          "Discover Seoul's street cafes, relish Jeju's seafood, and roam Jeonju's markets.",
        days: 6,
      },
    ],
  },
];

export const ABOUT_US_BLOCKS = [
  {
    id: 0,
    number: "12K",
    title: "Total Destinations",
  },
  {
    id: 1,
    number: "10M+",
    title: "Total Customers",
  },
  {
    id: 2,
    number: "5.0",
    title: "Average Rating",
  },
];

export const FEEDBACKS = [
  {
    id: 0,
    user_image: girlBlondeFeedbackImg,
    user_name: "Emily Johnson",
    user_job: "Traveler Blogger",
    feedback_text:
      "Our trip to Japan was absolutely incredible! Every detail was taken care of, and we enjoyed every moment. The guides were very professional and provided a wealth of information about the history and culture of the places we visited. We particularly loved the cherry blossom tour, which was a breathtaking experience. The accommodations were top-notch, and the local cuisine was a delightful adventure on its own. From the bustling streets of Tokyo to the serene temples of Kyoto, every part of our journey was perfectly planned and executed. I will definitely use your services again for our next trips!",
  },
  {
    id: 1,
    user_image: girlDarkEyeFeedbackImg,
    user_name: "Anna Martinez",
    user_job: "Web Designer",
    feedback_text:
      "Our trip to Korea exceeded all our expectations! We loved the service and the personalized approach. We visited many interesting places, including the vibrant city of Seoul and the historic palaces. The cultural immersion activities, such as a traditional Korean cooking class and a visit to a local market, were fantastic. Our guide was passionate and knowledgeable, providing us with deep insights into Korean culture and history. The accommodation was comfortable, and the food was delicious. Thank you so much for an unforgettable journey!",
  },
  {
    id: 2,
    user_image: manFeedbackImg,
    user_name: "Allan Po",
    user_job: "Software Engineer",
    feedback_text:
      "Thank you so much for the amazing trip to China! Everything was organized to the highest standard, from hotels to excursions. The Great Wall tour was especially impressive, offering stunning views and an insightful history lesson. The local guides were incredibly knowledgeable and friendly, making our experience even more enriching. We also enjoyed the traditional tea ceremony and a visit to the Terracotta Warriors, which were highlights of our trip. The seamless coordination and attention to detail ensured we had a stress-free and enjoyable holiday. I highly recommend it to anyone who wants to experience the true essence of this fascinating country!",
  },
];
