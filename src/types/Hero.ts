export type THero = {
  id: number;
  title: string;
  bg: string;
  cards: THeroCard[];
};

export type THeroCard = {
  id: number;
  icon: string;
  title: string;
  text: string;
};
