import React from "react";
import { ReactComponent as Vk } from '../assets/icons/vk-icon.svg';
import { ReactComponent as Telegram } from '../assets/icons/tel-icon.svg';
import { ReactComponent as GitHub } from '../assets/icons/github-icon.svg';
import '../styles/footer.css';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__wrap">
          <a href="" target="_blank" rel="noreferrer">
            <Vk />
          </a>
          <a href="https://t.me/asotikova" target="_blank" rel="noreferrer">
            <Telegram />
          </a>
          <a href="https://github.com/AsotikovaSvetlana" target="_blank" rel="noreferrer">
            <GitHub />
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer;