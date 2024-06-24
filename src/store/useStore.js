import { create } from 'zustand';

const useStore = create((set) => ({
  usd: '',
  eur: '',
  exchangeRate: 1.07,
  setUsd: (value) => set((state) => ({ usd: value, eur: (value / state.exchangeRate).toFixed(2) })),
  setEur: (value) => set((state) => ({ eur: value, usd: (value * state.exchangeRate).toFixed(2) })),
}));

export default useStore;
