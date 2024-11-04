import { THeroCard } from "./HeroCard";

export type THero = {
  id: number;
  title: string;
  bg: string;
  cards: THeroCard[];
};
