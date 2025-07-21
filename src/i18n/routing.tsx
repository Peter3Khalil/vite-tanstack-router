import { Link as RouterLink, useLocation } from '@tanstack/react-router';
import i18next from 'i18next';
import { type ComponentProps, type FC } from 'react';
type Props = Omit<ComponentProps<typeof RouterLink>, 'href'> & {
  locale?: string;
};
export const Link: FC<Props> = ({ locale, to, ...props }) => {
  const currentLang = locale || i18next.language;
  to = `/${currentLang}${to ?? ''}`;
  return <RouterLink to={to} {...props} />;
};

export const usePathname = () => {
  const { pathname } = useLocation();
  return '/' + pathname.slice(3); // Remove leading slash and locale
};
