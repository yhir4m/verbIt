import { Link } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../../../contexts/userContext";
import UserCourseSelect from "../../modals/userCourseSelect/userCourseSelect";
import "./mobileNavbar.css";

function MobileNavbar() {
  const [userLanguage, setUserLanguage] = useState("zh");
  const {userCourse} = useUserContext();

  return (
    <nav className="mobile-navbar">
      <section className="mobile-navbar__logo">
        <span>VerbIt</span>
      </section>
      <section className="mobile-navbar__rigth">
        <div className="mobile-navbar__rigth">
            <div className="mobile-navbar__rigth-options">
              <img
              className="mobile-navbar__language-flag mobile-navbar__course-flag"
              src={`../../../../public/languagesAssets/${userCourse}/${userCourse}-flag.webp`}
              alt="Course flag"
              width={40}
              height={40}
              />
              <span>User</span>
            </div>
        </div>
      </section>
      <div className="mobile-navbar__rigth-modal">
          <UserCourseSelect></UserCourseSelect>
      </div>


 

export default MobileNavbar;
