import { create } from "zustand";
import { ActivityData } from "../activities/types";

interface StoreStructure {
  activities: ActivityData[];
  loadActivity: (activities: ActivityData[]) => void;
}

const useActivitiesStore = create<StoreStructure>((set) => ({
  activities: [],
  loadActivity: (activities: ActivityData[]) => {
    set((state) => ({
      ...state,
      activities,
    }));
  },
}));

export default useActivitiesStore;
