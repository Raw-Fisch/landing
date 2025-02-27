import styled from "@emotion/styled";
import {css} from "@emotion/react";

const Button = styled.button`
  display: flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 60px;
  ${({ theme }) => css`
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
  `};
  border: none;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 100% */

  &:hover {
    opacity: 0.7;
  }
`;

export default Button;
