import React from "react";

const ImageDisplay = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="Displayed Image" />
    </div>
  );
};

export default ImageDisplay;
