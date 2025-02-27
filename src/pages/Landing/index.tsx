import styled from "@emotion/styled";
import Team from "pages/Landing/Team";
import Milestone from "pages/Landing/Milestone";
import { useLocation } from "react-router-dom";
import { useCallback, useEffect } from "react";
import Features from "./Features";
import Hero from "./Hero";

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.white};

  overflow-x: hidden;
`;

function LandingPage() {
  const location = useLocation();

  const onLoadHandler = useCallback(() => {
    const element = document.getElementById(location.hash.substring(1));
    if (element) {
      element.scrollIntoView();
    }
  }, [location.hash]);

  useEffect(() => {
    window.addEventListener("load", onLoadHandler);

    return () => {
      window.removeEventListener("load", onLoadHandler);
    };
  }, [onLoadHandler]);

  return (
    <Wrapper>
      <Hero />
      <Features />
      <Milestone />
      <Team />
    </Wrapper>
  )
}

export default LandingPage;