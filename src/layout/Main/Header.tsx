import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Button from "components/Button";
import font from "styles/font";
import {Link} from "react-router-dom";
import Tippy from "@tippyjs/react";

const BG = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 60px;

  a {
    height: 30px;
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
`;

const Logo = styled.a`
  ${font.logo}
  font-size: 2rem;
  ${({ theme }) => css`
    color: ${theme.colors.white}; 
    &:hover {
        color: ${theme.colors.white};
    }
  `};
`;

const MenuItem = styled.a`
  font-size: 16px;
  font-weight: 900;
  letter-spacing: -0.48px;
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    &:hover {
      color: ${theme.colors.primary};
    }
  `};
`;

const navLinks = [
  {
    path: "/#features",
    label: "FEATURES",
  },
  {
    path: "/#milestone",
    label: "MILESTONE",
  },
  {
    path: "/#team",
    label: "TEAM",
  },
];

function Header() {
  return (
    <BG>
      <Wrapper>
        <Link to="/" onClick={() => {
          window.scroll(0, 0);
        }}>
          <Logo>Nailaminute</Logo>
        </Link>
        <FlexBox>
          {navLinks.map(({ path, label }) => (
            <MenuItem key={path} href={path}>
              {label}
            </MenuItem>
          ))}
          <Tippy content="Coming soon">
            <Button>Download</Button>
          </Tippy>
        </FlexBox>
      </Wrapper>
    </BG>
  );
}

export default Header;
