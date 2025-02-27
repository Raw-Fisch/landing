import * as React from "react";
import { css } from "@emotion/react";

const headerStyles = css({
  width: "100%",
  textAlign: "center",
  "@media (max-width: 991px)": {
    maxWidth: "100%",
  },
});

const getTitleStyles = (imageBackground: boolean) => css({
  width: "100%",
  fontSize: "56px",
  fontWeight: "800",
  lineHeight: "1.1",
  ...(imageBackground && { mixBlendMode: "luminosity" }),
  "@media (max-width: 991px)": {
    maxWidth: "100%",
    fontSize: "40px",
  },
});

const descriptionStyles = css({
  fontWeight: "400",
  lineHeight: "1.6",
  marginTop: "24px",
  whiteSpace: "pre-line",
  "@media (max-width: 991px)": {
    maxWidth: "100%",
  },
});

interface SectionHeaderProps {
  title: string;
  description: string;
  imageBackground?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
                                                              title,
                                                              description,
                                                              imageBackground = false,
                                                            }) => {
  return (
    <header css={headerStyles}>
      <h1 css={getTitleStyles(imageBackground)}>{title}</h1>
      <p css={descriptionStyles}>{description}</p>
    </header>
  );
};
