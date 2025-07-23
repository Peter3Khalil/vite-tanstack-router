import { useParams } from '@tanstack/react-router';
import i18next from 'i18next';

const useLocale = () => {
  const locale =
    useParams({ from: '/$locale', shouldThrow: false })?.locale ||
    i18next.language;
  return locale;
};

export default useLocale;
