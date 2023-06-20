import { create } from 'zustand';

export const useStore = create((set) => ({
  loading: false,
  isLoading: () => set((state) => ({ loading: true })),
  noLoading: () => set((state) => ({ loading: false })),
}));
