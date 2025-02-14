import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import "./Home.css"
function Home() {

  //const { t, i18n } = useTranslation();

  return (
    <div className='home'>
      <Link to={'General'}>Vocabulario General</Link>
      <Link to={'WORDSC2'}>C2</Link>
      <Link to={'WORDSC1'}>C1</Link>
      <Link to={'WORDSB2'}>B2</Link>
      <Link to={'WORDSB1'}>B1</Link>
      <Link to={'WORDSA2'}>A2</Link>
      <Link to={'WORDSA1'}>A1</Link>
      <Link to={'Progress'}>Mi progreso</Link>
      <Link to={'AllWords'}>Palabras</Link>
      <Link to={'Storaged'}>Palabras guardadas</Link>

    </div>
  );
}

export default Home;
