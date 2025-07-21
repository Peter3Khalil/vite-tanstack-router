'use client';
import { useLocation } from '@tanstack/react-router';
import i18next from 'i18next';
import { type FC } from 'react';
import { Link, usePathname } from '../../i18n/routing';
type Props = Omit<React.ComponentProps<typeof Link>, 'href' | 'locale'>;
const LanguageSwitcher: FC<Props> = ({ className, children, ...props }) => {
  const locale = i18next.language;
  const pathname = usePathname();
  const { searchStr } = useLocation();
  console.log(searchStr);
  return (
    <Link
      to={`${pathname}${searchStr}`}
      locale={locale === 'en' ? 'ar' : 'en'}
      className={className}
      {...props}
    >
      {children || `${locale === 'en' ? 'Ar' : 'En'}`}
    </Link>
  );
};

export default LanguageSwitcher;
