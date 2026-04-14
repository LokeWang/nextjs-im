import { create } from 'zustand';

interface UserState {
  userId: string | null;
  username: string | null;
  avatar: string | null;
  setUser: (user: { userId: string; username: string; avatar?: string }) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  userId: null,
  username: null,
  avatar: null,
  setUser: ({ userId, username, avatar = '' }) =>
    set({ userId, username, avatar }),
  clearUser: () => set({ userId: null, username: null, avatar: null }),
}));
