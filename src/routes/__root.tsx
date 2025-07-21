import {
  Link,
  Outlet,
  createRootRoute,
  useLocation,
} from '@tanstack/react-router';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const locale = i18next.language;
  const { pathname } = useLocation();
  const { t } = useTranslation();
  let switcherLink;
  if (pathname === '/') {
    switcherLink = locale === 'en' ? `/ar` : `/en`;
  } else {
    switcherLink = pathname.startsWith('/en')
      ? pathname.replace('/en', '/ar')
      : pathname.replace('/ar', '/en');
  }
  return (
    <>
      <div className="flex gap-2 p-2 text-lg">
        <Link
          to="/$locale"
          params={{ locale }}
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          {t('nav.home')}
        </Link>{' '}
        <Link
          to="/$locale/about"
          params={{ locale }}
          activeProps={{
            className: 'font-bold',
          }}
        >
          {t('nav.about')}
        </Link>
        <Link to={switcherLink}>{locale === 'en' ? 'ar' : 'en'}</Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
}
