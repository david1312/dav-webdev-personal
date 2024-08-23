import useMediaQuery from "./useMediaQuery";
import { breakpoints } from "@/utils/contants";

export const useIsMobile = (): boolean => {
  return useMediaQuery(breakpoints.mobile);
};
