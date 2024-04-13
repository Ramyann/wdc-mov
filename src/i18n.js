import i18n from 'i18next';
import {initReact18next, initReactI18next} from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n 
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    fallBackLng: 'ku',
    debug: true,
    interpolation: {
        escapeValue: false,
    }
});

export default i18n;