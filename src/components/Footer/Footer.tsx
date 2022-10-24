import React, { FC } from "react";
import "./Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logoWithe from "../../img/logo_withe.svg";

const Footer: FC = () => (
  <footer className="footer__frame">
    <div className="footer__frame-copy">
      <img src={logoWithe} alt="logo" />
    </div>
    <div className="footer__frame-socials">
      <a href="https://vk.com/" target="_blank" rel="noopener noreferrer">
        <YouTubeIcon />
      </a>
      <a
        href="https://t.me/Carsherinng_car_chat_bot"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TelegramIcon />
      </a>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon />
      </a>
    </div>
  </footer>
);

export default Footer;
