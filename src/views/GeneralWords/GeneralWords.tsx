import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import "./GeneralWords.css";
function GeneralWords() {

  //const { t, i18n } = useTranslation();
  return (
    <div className='home'>
      <Link to={'General'}>Vocabulario General</Link>

    </div>
  );
}

export default GeneralWords;
