//import { useTranslation } from 'react-i18next';
import { useUserContext } from '../../../contexts/userContext';
import "./userCourseSelect.css";
import coursesUtils from "../../../utils/coursesUtils";
import generalUtils from '../../../utils/generalUtils';

function UserCourseSelect({modalId,modalActiveClass}:{modalId:string,modalActiveClass:string}){
  //const { t, i18n } = useTranslation();
  const {userCourse, setUserCourse} = useUserContext();
  const ALL_LANGUAGES = import.meta.env.VITE_ALL_COURSES;



  return (
    <article className='course--select--container'>
        <div className='course--select--courses'>
          {ALL_LANGUAGES.split(",").map((item:string,index:number)=>(
            <img
              key={index.toString()}
              className={`mobile-navbar__language-flag mobile-navbar__course-flag|${index}`}
              src={`/languagesAssets/${item}/${item}-flag.webp`}
              alt="Course flag"
              onClick={()=>{
                coursesUtils.changeUserCourse(userCourse,setUserCourse, item)
                generalUtils.launchModal(modalId,modalActiveClass)
              }}
            />
          ))

          }

        </div>
    </article>
  );
}

export default UserCourseSelect;
