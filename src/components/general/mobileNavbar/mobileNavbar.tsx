import { Link } from "react-router-dom";
import { useState } from "react";


import "./mobileNavbar.css";

function MobileNavbar() {
  const [userLanguage, setUserLanguage] = useState("zh");
  const [userCourse, setUserCourse] = useState("en");


  return (
    <nav className="mobile-navbar">
      <section className="mobile-navbar__logo">
        <span>VerbIt</span>
      </section>
      <section className="mobile-navbar__rigth">
        <div className="mobile-navbar__rigth--flags">
            <img
            className="mobile-navbar__language-flag"
            src={`../../../../public/languagesAssets/${userLanguage}/${userLanguage}-flag.webp`}

            alt="Language flag"
            width={40}
            height={40}
            />
            <img
            className="mobile-navbar__language-flag mobile-navbar__course-flag"
            src={`../../../../public/languagesAssets/${userCourse}/${userCourse}-flag.webp`}
            alt="Course flag"
            width={40}
            height={40}
            />
        </div>
        <div className="mobile-navbar__rigth--profile">
            <span>User</span>
        </div>

      </section>

    </nav>
  );
}

export default MobileNavbar;
