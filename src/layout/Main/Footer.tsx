import styled from "@emotion/styled";
import {css} from "@emotion/react";
import theme from "styles/theme";
import { motion } from "framer-motion";
import iconEmail from "assets/icons/icon-email.svg";
import iconLinkedIn from "../../assets/icons/icon-linkedin.svg";

const Wrapper = styled.footer`
  overflow-x: hidden;
`;

const Copyright = styled.p`
  margin: 43px auto 40px;
  width: fit-content;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

function Footer() {
  return (
    <Wrapper>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 blur-3xl opacity-20"
        style={{transform: `translateY(${scrollY * 0.2}px)`}}
      />

      <div css={css`
          display: flex;
          justify-content: center;
          color: ${theme.colors.white};
          text-align: center;
          font-weight: 500;
          font-size: 25px;
          line-height: 4;
          padding-top: 100px;
      `}>
        Nail it, Own it
        <br/>
      </div>
      <div css={css`
          display: flex;
          justify-content: center;
          color: ${theme.colors.white};
          text-align: center;
          font-weight: 500;
          font-size: 16px;
          line-height: 3;
          padding-bottom: 100px;
          flex-direction: column;
      `}>
        Contact Us
        <a href="mailto:rawfish1221@gmail.com">
          <img src={iconEmail} width={20} height={20} alt="email"/>
        </a>
      </div>
      <Copyright>© 2025 Raw Fish. All Right Reserved</Copyright>
    </Wrapper>
  );
}

export default Footer;