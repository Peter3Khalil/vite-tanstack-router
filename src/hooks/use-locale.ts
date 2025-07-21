import i18n from 'i18next';
import { useState } from 'react';

const useLocale = () => {
  const [locale, setLocale] = useState(i18n.language);

  const changeLanguage = (lng: 'ar' | 'en') => {
    i18n.changeLanguage(lng);
    setLocale(lng);
  };

  return { locale, changeLanguage };
};

export default useLocale;
