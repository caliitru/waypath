import { create } from 'zustand';

export type TimelineRange = '7' | '30' | '90';

interface TimelineState {
  range: TimelineRange;
  setRange: (range: TimelineRange) => void;
}

export const useTimelineStore = create<TimelineState>((set) => ({
  range: '30',
  setRange: (range) => set({ range })
}));