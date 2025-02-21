import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import "./Home.css"
import { useUserContext } from '../../contexts/userContext';
function Home() {

  const { t} = useTranslation();
  const {languagesDict, userCourse} = useUserContext();

  return (
    <main className='home'>
      <section className='home--header'>
        <h1>{t("traduction-improve-your-language")}{languagesDict[userCourse]} </h1>
      </section>
      <Link to={'General'}>Vocabulario General</Link>
      <Link to={'WORDS/C2'}>C2</Link>
      <Link to={'WORDS/C1'}>C1</Link>
      <Link to={'WORDS/B2'}>B2</Link>
      <Link to={'WORDS/B1'}>B1</Link>
      <Link to={'WORDS/A2'}>A2</Link>
      <Link to={'Words/A1'}>A1</Link>
      <Link to={'Progress'}>Mi progreso</Link>
      <Link to={'AllWords'}>Palabras</Link>
      <Link to={'Storaged'}>Palabras guardadas</Link>

    </main>
  );
}

export default Home;
