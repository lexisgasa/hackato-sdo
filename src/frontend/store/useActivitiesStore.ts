import { create } from "zustand";
import { Activity } from "../activities/types";

interface StoreStructure {
  activities: Activity[];
  loadActivity: (activities: Activity[]) => void;
}

const useActivitiesStore = create<StoreStructure>((set) => ({
  activities: [],
  loadActivity: (activities: Activity[]) => {
    set((state) => ({
      ...state,
      activities,
    }));
  },
}));

export default useActivitiesStore;
