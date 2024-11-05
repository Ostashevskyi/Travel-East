import { create } from "zustand";
import { HERO_CITY } from "../constants";
import { THero } from "../types/Hero";

type State = {
  hero: THero;
};

type Action = {
  updateHero: (hero: State["hero"]) => void;
};

export const useHeroStore = create<State & Action>((set) => ({
  hero: HERO_CITY.japan,
  updateHero: (hero) => set(() => ({ hero: hero })),
}));
