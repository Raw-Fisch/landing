import React from 'react';
import { css } from '@emotion/react';

interface ImageComponentProps {
  src: string;
  alt: string;
}

const imageStyles = css`
  aspect-ratio: 0.49;
  object-fit: contain;
  object-position: center;
  width: 100%;
  max-width: 304px;
`;

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      css={imageStyles}
    />
  );
};

export default ImageComponent;