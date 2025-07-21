import { Link } from '@/i18n/routing';
import LanguageSwitcher from '@components/shared/language-switcher';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex gap-2 p-2 text-lg">
        <Link
          to="/"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          {t('nav.home')}
        </Link>{' '}
        <Link
          to="/about"
          activeProps={{
            className: 'font-bold',
          }}
        >
          {t('nav.about')}
        </Link>
        <LanguageSwitcher />
      </div>
      <hr />
      <Outlet />
    </>
  );
}
