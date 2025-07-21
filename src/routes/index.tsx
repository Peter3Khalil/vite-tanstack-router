import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { Home } from './$locale/_layout/index';
import { useEffect } from 'react';

export const Route = createFileRoute('/')({
  component: Root,
});

function Root() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate({ to: '/$locale', params: { locale: 'en' }, replace: true });
  }, [navigate]);
  return <Home />;
}
