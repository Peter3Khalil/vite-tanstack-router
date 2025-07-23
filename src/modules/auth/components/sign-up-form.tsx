import { Link } from '@/shared/i18n/routing';
import InputFormField from '@components/form-fields/input-form-field';
import { FacebookIcon, GoogleIcon } from '@components/icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@lib/utils';
import { Button } from '@ui/button';
import { Form } from '@ui/form';
import { useForm } from 'react-hook-form';
import z from 'zod';

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export function SignupForm({
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
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-muted-foreground text-balance text-sm">
            Enter your information below to create your account
          </p>
        </div>
        <div className="grid gap-6">
          <div className="grid grid-cols-2 gap-4">
            <InputFormField
              name="firstName"
              label="First Name"
              placeholder="John"
              control={form.control}
            />
            <InputFormField
              name="lastName"
              label="Last Name"
              placeholder="Doe"
              control={form.control}
            />
          </div>
          <InputFormField
            name="email"
            label="Email"
            placeholder="you@example.com"
            control={form.control}
          />
          <InputFormField
            name="password"
            label="Password"
            control={form.control}
            type="password"
          />
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background text-muted-foreground relative z-10 px-2">
              Or continue with
            </span>
          </div>
          <div>
            <Button variant="outline" type="button" className="w-full">
              <GoogleIcon />
              Sign up with Google
            </Button>
            <Button variant="outline" type="button" className="mt-3 w-full">
              <FacebookIcon />
              Sign up with Facebook
            </Button>
          </div>
        </div>
        <div className="text-center text-sm">
          Already have an account?{' '}
          <Link to="/login" className="underline underline-offset-4">
            Sign in
          </Link>
        </div>
      </form>
    </Form>
  );
}
