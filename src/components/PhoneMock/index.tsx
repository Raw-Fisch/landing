import React from 'react';
import ImageComponent from './ImageComponent';

const PhoneMock: React.FC = () => {
  return (
    <ImageComponent
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2540bc7-d09c-43fc-8472-6c99b924f226?placeholderIfAbsent=true&apiKey=61415f98a9c04430a5650e6a03ff1614"
      alt="Descriptive alt text for the image"
    />
  );
};

export default PhoneMock;