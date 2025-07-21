import {
  createFileRoute,
  notFound,
  Outlet,
  useParams,
} from '@tanstack/react-router';
import i18next from 'i18next';
import { useEffect } from 'react';

export const Route = createFileRoute('/$locale/_layout')({
  component: LayoutComponent,
  onEnter(ctx) {
    const locale = ctx.params.locale;
    if (locale !== 'en' && locale !== 'ar') {
      return notFound();
    }
    i18next.changeLanguage(locale);
  },
});

function LayoutComponent() {
  const { locale } = useParams({ from: '/$locale' });
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);
  return <Outlet />;
}
