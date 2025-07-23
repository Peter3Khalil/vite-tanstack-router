import { FacebookIcon, GoogleIcon } from '@components/icons';
import { Button } from '@ui/button';
import { Input } from '@ui/input';
import { Label } from '@ui/label';
import { PasswordInput } from '@ui/password-input';
import { Link } from '@/shared/i18n/routing';
import { cn } from '@lib/utils';

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  return (
    <form className={cn('flex flex-col gap-6', className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-balance text-sm">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ms-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <PasswordInput id="password" required />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>
        <div>
          <Button variant="outline" className="w-full">
            <GoogleIcon />
            Login with Google
          </Button>
          <Button variant="outline" className="mt-3 w-full">
            <FacebookIcon />
            Login with Facebook
          </Button>
        </div>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{' '}
        <Link to="/signup" className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
    </form>
  );
}
