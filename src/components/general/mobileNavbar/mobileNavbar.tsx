import { useEffect, useState } from "react";
import { useUserContext } from "../../../contexts/userContext";
import UserCourseSelect from "../../modals/userCourseSelect/userCourseSelect";
import "./mobileNavbar.css";

import generalUtils from "../../../utils/generalUtils";

import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

function MobileNavbar() {
  const [userLanguage, setUserLanguage] = useState("zh");
  const {userCourse} = useUserContext();

  const { t, i18n } = useTranslation();

  useEffect(()=>{
    const handleLanguageChange = (lang: string) => {
      i18n.changeLanguage(lang);
    };
    handleLanguageChange(userLanguage)
  },[userCourse])
  return (
    <nav className="mobile-navbar">

      <section className="mobile-navbar__rigth">
        <section className="mobile-navbar__logo">
          <Link to="/" >VerbIt</Link>
        </section>
        <div className="mobile-navbar__user">
              <img
              className="mobile-navbar__language-flag mobile-navbar__course-flag"
              src={`../../../../public/languagesAssets/${userCourse}/${userCourse}-flag.webp`}
              alt="Course flag"
              onClick={()=>generalUtils.launchModal("userCourseSelectModal","userCourseSelectModal-active")}
              />
              <Link to="/login">Login</Link>
        </div>
      </section>

      <div id="userCourseSelectModal" className="mobile-navbar__rigth-modal">
          <UserCourseSelect modalId={'userCourseSelectModal'} modalActiveClass={'userCourseSelectModal-active'}></UserCourseSelect>
      </div>
      </nav>
  );
}


 

export default MobileNavbar;
