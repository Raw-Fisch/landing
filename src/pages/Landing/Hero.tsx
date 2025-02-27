import styled from "@emotion/styled";
import * as React from "react";
import {SectionHeader} from "./SectionHeader";
import imgBg from "assets/images/hero_bg2.jpg";
import {css} from "@emotion/react";
import Button from "components/Button";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: flex-start;
    padding: 300px 100px;
    padding-top: 150px;
    ${({ theme }) => css`
      background: ${theme.colors.gradient}, url(${imgBg});
  `};
    
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    @media (max-width: 991px) {
        padding: 0 20px 100px;
    }
`;

const Contents = styled.div`
    display: flex;
    max-width: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    position: relative;
    padding: 80px;
    justify-content: center;
    @media (max-width: 991px) {
        padding: 20px;
    };
`;

const Hero: React.FC = () => {

  return (
    <Wrapper id="hero">
      <Contents>
        <SectionHeader
          title="Nailaminute – 빠르게, 그러나 가장 나답게"
          description="네일은 단순한 미용이 아니라 나를 표현하는 작은 캔버스입니다.
          Nailaminute은 원하는 스타일을 더 쉽게, 더 합리적으로, 더 빠르게 찾고 예약할 수 있도록 도와줍니다.
          기다림 없이, 타협 없이, 나답게 빛나는 순간을 지금 만나보세요."
          imageBackground={true}
        />
        <br/><br/>
        <Button onClick={() => {
          window.location.hash = "features";
        }}>Learn More</Button>
      </Contents>
    </Wrapper>
  );
};

export default Hero;