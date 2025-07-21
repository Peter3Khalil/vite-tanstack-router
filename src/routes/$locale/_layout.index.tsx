import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/$locale/_layout/')({
  component: Index,
});

function Index() {
  const { t } = useTranslation();
  return <div>{t('welcome')}</div>;
}
