import { LoginForm } from '@modules/auth/components/login-form';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/_layout/login')({
  component: LoginPage,
});

function LoginPage() {
  return <LoginForm />;
}
