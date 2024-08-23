import useMediaQuery from "./useMediaQuery";
import { breakpoints } from "@/utils/config";

export const useIsMobile = (): boolean => {
  return useMediaQuery(breakpoints.mobile);
};
