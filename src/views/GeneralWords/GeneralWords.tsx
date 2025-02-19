import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import "./GeneralWords.css";


import generalWordsHeader from  "../../assets/general/placeholder.webp";
function GeneralWords() {
  const { t, i18n } = useTranslation();

  //const { t, i18n } = useTranslation();
  return (
    <main className='general_words--container'>
      <section className='general_words--header'>
        <img src={generalWordsHeader} alt="" />
        <h1>{t("traduction-general-words")}</h1>
      </section>
      <Link to={'General'}></Link>

    </main>
  );
}

export default GeneralWords;
