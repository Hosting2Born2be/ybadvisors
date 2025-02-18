import { create } from "zustand";

const usePopupStore = create((set) => ({
  requestPopupDisplay: false,

  setRequestPopupDisplay: (value) => set({ requestPopupDisplay: value }),
}));

export default usePopupStore;
