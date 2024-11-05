import { create } from "zustand";
import { DESTINATIONS_CARDS } from "../constants";
import { TDestination } from "../types/Destination";

type State = {
  destination: TDestination;
};

type Action = {
  updateDestination: (destination: State["destination"]) => void;
};

export const useDestinationStore = create<State & Action>((set) => ({
  destination: DESTINATIONS_CARDS.find((card) => card.title === "Japan")!,
  updateDestination: (destination) => set(() => ({ destination: destination })),
}));
