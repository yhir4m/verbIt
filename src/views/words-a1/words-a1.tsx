import { useTranslation } from 'react-i18next';
import { useUserContext } from '../../contexts/userContext';

import ShiningButton from '../../components/Buttons/shinning-button/shinning-button';
import "./words-a1.css";


function WordsA1() {

  const { t, i18n } = useTranslation();
  return (
    <main className='words_a1--container'>
        <section className='words_a1--header'>
            <h1>{t("traduction-words_a1")}</h1>  
            <h2>{t("traduction-words_a1-description")}</h2>
            <ShiningButton />
        </section>
    </main>
  );
}

export default WordsA1;
