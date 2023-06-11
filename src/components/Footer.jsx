import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <a href="/">
        <img
          className="footer__logo"
          src={process.env.PUBLIC_URL + "/images/logo-ru-rap-map.png"}
          alt="Логотип карта русского репа"
        />
      </a>
      <a title="Предложить репера/город" href="https://t.me/yourandbass" target="_blank" rel="noreferrer">
        <img
          className="footer__logo_tg"
          src={process.env.PUBLIC_URL + "/images/telegram-logo.png"}
          alt="Логотип телеграмма для карты русского репа"
        />
      </a>
      <h1 className="footer__logo_tg_text">карта русского репа</h1>
    </footer>
  );
}

export default Footer;
