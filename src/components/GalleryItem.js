import React, { useState } from "react";
import Image from 'react-bootstrap/Image'
import '../styles/galleryItem.css';

const GalleryItem = ({ photo }) => {
  const [button, setButton] = useState("hidden");
  const { download_url: url } = photo;

  const showButton = () => {
    setButton("active");
  };

  const hideButton = () => {
    setButton("hidden");
  };

  return (
    <>
      <div
        className={`photo-wrapper ${button === 'active' ? 'opacity' : ''}`}
        onMouseEnter={showButton}
        onMouseLeave={hideButton}
      >
        <Image
          src={url}
          width="100%"
          className="m-auto"
        />
        <button 
          className={`photo-button ${button}`}
        >
          Show details
        </button>
      </div>
    </>
  );
}

export default GalleryItem;