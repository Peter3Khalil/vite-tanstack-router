import {
  Link as RouterLink,
  useLocation,
  type LinkComponentProps,
} from '@tanstack/react-router';
import i18next from 'i18next';
import { type FC } from 'react';
type RouteWithoutLocale<T extends string | undefined> =
  T extends `/$locale${infer Rest}` ? Rest : T;

type Props = Omit<LinkComponentProps<typeof RouterLink>, 'href' | 'to'> & {
  locale?: string;
  to?: RouteWithoutLocale<LinkComponentProps<typeof RouterLink>['to']>;
};

export const Link: FC<Props> = ({ locale, to, ...props }) => {
  const currentLang = locale || i18next.language;
  return (
    <RouterLink
      to={`/$locale${to}` as never}
      params={{ locale: currentLang }}
      {...props}
    />
  );
};

export const usePathname = () => {
  const { pathname } = useLocation();
  return '/' + pathname.slice(3); // Remove leading slash and locale
};
