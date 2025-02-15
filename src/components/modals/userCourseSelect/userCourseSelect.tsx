import { useTranslation } from 'react-i18next';
import { useUserContext } from '../../../contexts/userContext';
import "./userCourseSelect.css";

function UserCourseSelect() {
  const { t, i18n } = useTranslation();
  const {userCourse} = useUserContext();

  const ALL_LANGUAGES = import.meta.env.VITE_ALL_LANGUAGES;
  return (
    <article className='course--select--container'>
        <div className='course--select--courses'>
          {ALL_LANGUAGES.split(",").map((item:string,index:number)=>(
            <img
              className={`mobile-navbar__language-flag mobile-navbar__course-flag|${index}`}
              src={`../../../../public/languagesAssets/${item}/${item}-flag.webp`}
              alt="Course flag"
              width={40}
              height={40}
            />
          ))

          }

        </div>
    </article>
  );
}

export default UserCourseSelect;
