import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from 'react-bootstrap/Image'
import '../styles/galleryItem.css';

const GalleryItem = ({ photo }) => {
  const [button, setButton] = useState("hidden");
  const { download_url: url, id } = photo;
  const navigate = useNavigate();

  const showButton = () => {
    setButton("active");
  };

  const hideButton = () => {
    setButton("hidden");
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    navigate(`/images/${id}`);
  }

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
          onClick={handleButtonClick}
        >
          Show details
        </button>
      </div>
    </>
  );
}

export default GalleryItem;