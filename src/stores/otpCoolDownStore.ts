import { create } from 'zustand';

interface OtpCooldownState {
  nextAllowedTime: number | null;
  isCooldownActive: boolean;
  remainingSeconds: number;
  startCooldown: (durationInSeconds: number) => void;
}

export const useOtpCooldown = create<OtpCooldownState>((set) => ({
  nextAllowedTime: null,
  isCooldownActive: false,
  remainingSeconds: 0,

  startCooldown: (durationInSeconds) => {
    const now = Date.now();
    const nextAllowedTime = now + durationInSeconds * 1000;

    set({
      nextAllowedTime,
      isCooldownActive: true,
      remainingSeconds: durationInSeconds,
    });

    const interval = setInterval(() => {
      const remaining = Math.ceil((nextAllowedTime - Date.now()) / 1000);
      if (remaining <= 0) {
        clearInterval(interval);
        set({
          nextAllowedTime: null,
          isCooldownActive: false,
          remainingSeconds: 0,
        });
      } else {
        set({ remainingSeconds: remaining });
      }
    }, 1000);
  },
}));
