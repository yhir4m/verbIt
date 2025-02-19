import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RoutesList from './routes'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'
import { UserProvider } from './contexts/userContext'
import en from "./locales/en/index";
import es from "./locales/es/index";

i18next.init({
  fallbackLng: 'es',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    es: {
      translation: es, // Cambié 'es: es' por 'translation: es'
    },
    en: {
      translation: en, // Cambié 'en: en' por 'translation: en'
    },
  },
});

function App() {
  return (
    <UserProvider>
      <I18nextProvider i18n={i18next}>
        <BrowserRouter>
          <RoutesList />
        </BrowserRouter>
      </I18nextProvider>
    </UserProvider>

  )
}

export default App
