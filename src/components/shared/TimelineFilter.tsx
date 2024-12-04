import React from 'react';
import { useTimelineStore } from '../../store/timelineStore';

export function TimelineFilter() {
  const { range, setRange } = useTimelineStore();

  return (
    <select
      value={range}
      onChange={(e) => setRange(e.target.value as '7' | '30' | '90')}
      className="border border-gray-200 rounded-lg px-3 py-2 text-sm"
    >
      <option value="7">Last 7 Days</option>
      <option value="30">Last 30 Days</option>
      <option value="90">Last 90 Days</option>
    </select>
  );
}