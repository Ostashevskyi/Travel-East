import { create } from "zustand";
import { DELAS_CARDS } from "../constants";
import { TDeal } from "../types/Deals";

type State = {
  deal: TDeal;
};

type Action = {
  updateDeal: (deal: State["deal"]) => void;
};

export const useDealStore = create<State & Action>((set) => ({
  deal: DELAS_CARDS.find((card) => card.title === "Japan")!,
  updateDeal: (deal) => set(() => ({ deal: deal })),
}));
