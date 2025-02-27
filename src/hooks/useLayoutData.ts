import { useMatches } from "react-router-dom";
import type { LoaderData } from "routes";

export const useLayoutData = () => {
  const matches = useMatches();
  const lastMatch = (matches.at(-1)?.data as LoaderData) || {};

  const { hasScrollSize = false } = lastMatch;

  return {
    hasScrollSize,
  };
};
