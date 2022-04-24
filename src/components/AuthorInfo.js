import React from "react";
import { Image } from 'react-bootstrap';
import '../styles/authorInfo.css';
import avatar from '../assets/images/about.jpeg';

const AuthorInfo = () => {
  return (
    <div className="author-info">
      <Image
        src={avatar}
        width="150"
        className="mb-3"
        roundedCircle
      />
      <div className="author-info__txt">
        <div>Asotikova Svetlana</div>
        <div>asotikova.sv@gmail.com</div>
      </div>
    </div>
  )
}

export default AuthorInfo;