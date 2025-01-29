import { create } from "zustand";

const usePopupStore = create((set) => ({
  requestPopupDisplay: false,
  jobsPopupDisplay: false,
  plansValue: false,
  jobValue: false,

  setRequestPopupDisplay: (value) => set({ requestPopupDisplay: value }),
  setJobsPopupDisplay: (value) => set({ jobsPopupDisplay: value }),
  setPlansValue: (value) => set({ plansValue: value }),
  setJobValue: (value) => set({ jobValue: value }),
}));

export default usePopupStore;
