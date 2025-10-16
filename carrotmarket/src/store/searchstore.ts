import { create } from "zustand";

interface SearchState {
  q: string;
  setQ: (value: string) => void;
}
export const useSearchStore = create<SearchState>((set) => ({
  q: "",
  setQ: (value) => set({ q: value }),
}));
