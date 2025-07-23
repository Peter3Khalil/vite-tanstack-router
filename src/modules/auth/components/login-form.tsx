import { Link } from '@/shared/i18n/routing';
import { FacebookIcon, GoogleIcon } from '@components/icons';
import InputFormField from '@components/form-fields/input-form-field';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@lib/utils';
import { Button } from '@ui/button';
import { Form } from '@ui/form';
import { Label } from '@ui/label';
import { useForm } from 'react-hook-form';
import z from 'zod';

const formSchema = z.object({
  email: z.email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('Form submitted with values:', values);
  }

  return (
    <Form {...form}>
      <form
        className={cn('flex flex-col gap-6', className)}
        onSubmit={form.handleSubmit(onSubmit)}
        {...props}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-balance text-sm">
            Enter your email below to login to your account
          </p>
        </div>
        <div className="grid gap-6">
          <InputFormField name="email" label="Email" control={form.control} />
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
            <InputFormField
              name="password"
              control={form.control}
              type="password"
              id="password"
            />
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
            <Button variant="outline" type="button" className="w-full">
              <GoogleIcon />
              Login with Google
            </Button>
            <Button variant="outline" type="button" className="mt-3 w-full">
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
    </Form>
  );
}
