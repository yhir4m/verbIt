import { useTranslation } from 'react-i18next';
//import { useUserContext } from '../../contexts/userContext';
import { useParams } from "react-router-dom";
import ShinningButton from '../../components/Buttons/shinning-button/shinning-button';
import "./words-a1.css";


function WordsA1() {
  type UrlParams = {
      level:string;
  };
  const { t } = useTranslation();
  const {level} = useParams<UrlParams>();


  return (
    <main className='words_a1--container'>
        <section className='words_a1--header'>
            <h1>{t(`traduction-words_${level}`)}</h1>  
            <h2>{t(`traduction-words_${level}-description`)}</h2>
            <ShinningButton levelUrl={`/test/${level}`}  />
        </section>
    </main>
  );
}

export default WordsA1;
