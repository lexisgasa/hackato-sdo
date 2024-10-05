import { create } from "zustand";
import { ActivityData } from "../activities/types";

interface StoreStructure {
  activity: ActivityData | null;
  loadActivity: (activity: ActivityData) => void;
}

const useActivitiesStore = create<StoreStructure>((set) => ({
  activity: null,
  loadActivity: (activity: ActivityData) => {
    set(() => ({
      activity,
    }));
  },
}));

export default useActivitiesStore;
