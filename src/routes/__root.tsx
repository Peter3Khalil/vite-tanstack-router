import {
  Link,
  Outlet,
  createRootRoute,
  useLocation,
  useParams,
} from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { locale } = useParams({ from: '/$locale' });
  const { pathname } = useLocation();
  const { t } = useTranslation();
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
        <Link
          to={
            pathname.startsWith('/en')
              ? pathname.replace('/en', '/ar')
              : pathname.replace('/ar', '/en')
          }
        >
          {locale === 'en' ? 'ar' : 'en'}
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
}
