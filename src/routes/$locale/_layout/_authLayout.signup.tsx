import { SignupForm } from '@modules/auth/components/sign-up-form';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/_layout/_authLayout/signup')({
  component: Signup,
});

function Signup() {
  return <SignupForm />;
}
