import { createFileRoute } from '@tanstack/react-router';
import { Home } from './$locale/_layout.index';

export const Route = createFileRoute('/')({
  component: Home,
});
