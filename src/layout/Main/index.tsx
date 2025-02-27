import { PropsWithChildren } from "react";
import Header from "layout/Main/Header";
import Footer from "layout/Main/Footer";
import ScrollToTop from "components/ScrollToTop";
import {useLayoutData} from "hooks/useLayoutData";
import styled from "@emotion/styled";
import {css} from "@emotion/react";

const ScrollWrapper = styled.div<{ hasScroll: boolean }>`
    ${({ hasScroll }) =>
  hasScroll &&
  css`
        min-width: 1440px;
        overflow: hidden;
      `}
`;

function MainLayout({ children }: PropsWithChildren) {
  const { hasScrollSize } = useLayoutData();

  return (
    <>
      <ScrollWrapper hasScroll={hasScrollSize}>
        <ScrollToTop>
          <Header />
          {children}
          <Footer />
        </ScrollToTop>
      </ScrollWrapper>
    </>
  );
}

export default MainLayout;
