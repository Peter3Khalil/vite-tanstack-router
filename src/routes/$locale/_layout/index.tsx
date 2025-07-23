import LanguageSwitcher from '@components/language-switcher';
import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/$locale/_layout/')({
  component: Home,
});

export function Home() {
  const { t } = useTranslation();
  return (
    <div>
      {t('Global.english-home')}
      <LanguageSwitcher />
    </div>
  );
}
