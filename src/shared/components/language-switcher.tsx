import { Link, usePathname } from '@/shared/i18n/routing';
import useLocale from '@hooks/use-locale';
import { useLocation } from '@tanstack/react-router';
import { type FC } from 'react';
type Props = Omit<
  React.ComponentProps<typeof Link>,
  'href' | 'locale' | 'preload'
>;
const LanguageSwitcher: FC<Props> = ({ className, children, ...props }) => {
  const locale = useLocale();
  const pathname = usePathname();
  const { searchStr } = useLocation();
  return (
    <Link
      to={`${pathname}${searchStr}` as never}
      locale={locale === 'en' ? 'ar' : 'en'}
      preload={false}
      className={className}
      {...props}
    >
      {children || `${locale === 'en' ? 'Ar' : 'En'}`}
    </Link>
  );
};

export default LanguageSwitcher;
