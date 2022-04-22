import React from "react";
import { Image } from 'react-bootstrap';
import '../styles/authorInfo.css';

const AuthorInfo = () => {
  return (
    <div className="author-info">
      <Image
        src="https://img2.freepng.ru/20180531/zwr/kisspng-computer-icons-user-profile-female-clip-art-user-5b107d11e4bf18.389078801527807249937.jpg"
        width="150"
        className="mb-3"
        roundedCircle
      />
      <div className="author-info__txt">
        <div>User Name</div>
        <div>User address</div>
      </div>
    </div>
  )
}

export default AuthorInfo;