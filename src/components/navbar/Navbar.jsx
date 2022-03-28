import React, {useState} from "react";
import Logo from "../../assets/logo.svg";
import { useTranslation } from "react-i18next";
import "./navbar.css";


const Navbar = () => {
    const [langText, setLangText] = useState(true)
    console.log("🚀 ~ file: Navbar.jsx ~ line 9 ~ Navbar ~ langText", langText)

  const { t, i18n } = useTranslation();

  const changeLang = (lang) => {
    setLangText(!langText)
    i18n.changeLanguage(lang);
    document.body.dir = i18n.dir();
  };

  const activeColorArabic = () => {
    return i18n.dir() === "rtl" ? "active" : "";
  };
  const activeColorEnglish = () => {
    return i18n.dir() === "ltr" ? "active" : "";
  };

  const marginRight = () => { 
    return i18n.dir() === "rtl" ? "5%" : "";
  }
  





  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container">
        <a className="navbar-brand">
          <img className="logo" src={Logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div
            className="box d-flex justify-content-between"
            style={{ marginRight: `${marginRight()}` }}
          >
            <ul className="navbar-nav" id="list">
              <li className="nav-item"  id="link">
                <a className="nav-link" aria-current="page" href="#home">
                  {t("navbar.home")}
                </a>
                <span className="line"></span>
              </li>
              <li className="nav-item" >
                <a className="nav-link" aria-current="page" href="#services">
                  {t("navbar.services")}
                </a>
                <span className="line"></span>
              </li>
              <li className="nav-item" >
                <a className="nav-link" href="#shiping">
                  {t("navbar.payment")}
                </a>
                <span className="line"></span>
              </li>
              <li className="nav-item" >
                <a className="nav-link" href="#testimonials">
                  {t("navbar.testimonials")}
                </a>
                <span className="line"></span>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className={`nav-item ${activeColorEnglish()}`}>
                <button
                  onClick={() => {
                    return langText?  changeLang("en"): changeLang("ar");
                  }
                  }
                >
                  <a
                    className={`nav-link ${activeColorEnglish()}`}
                    aria-current="page"
                    href="#"
                  >
                    {langText && i18n.dir() === 'rtl' ? t("navbar.english") : t("navbar.arabic")}
                  </a>
                </button>
                <span className="line"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
