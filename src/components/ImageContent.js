import React from "react";
import '../styles/imageContent.css';

const ImageContent = ({ image: { author, width, height } }) => {
  return (
    <div className="image-content__wrapper">
      <div className="image-content__text">
        <span>Author:</span> {author}
      </div>
      <div className="image-content__text">
        <span>Width:</span> {width}
      </div>
      <div className="image-content__text">
        <span>Height:</span> {height}
      </div>
    </div>
  )
}

export default ImageContent;