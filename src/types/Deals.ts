export type TDeal = {
  id: number;
  title: string;
  cards: TDealCard[];
};

export type TDealCard = {
  id: number;
  title: string;
  short_description: string;
  image: string;
  image_alt: string;
  old_price: number;
  new_price: number;
  stars: number;
  comments_count: number;
  avg_rating: number;
  description: string;
  days: number;
};
