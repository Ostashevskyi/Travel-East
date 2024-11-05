export type TDestination = {
  id: number;
  title: string;
  cards: TDestinationCard[];
};

export type TDestinationCard = {
  id: number;
  image: string;
  title: string;
  views: number;
  destination: string;
  type?: string;
};
