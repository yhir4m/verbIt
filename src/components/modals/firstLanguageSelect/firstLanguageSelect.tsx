import { useTranslation } from 'react-i18next';
import "./firstLanguageSelect.css";

function FirsLanguageSelect() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div>
      <h1>{t('welcome')}</h1>
      <button onClick={() => handleLanguageChange('en')}>English</button>
      <button onClick={() => handleLanguageChange('es')}>Español</button>
    </div>
  );
}

export default FirsLanguageSelect;
