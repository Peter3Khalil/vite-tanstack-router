import { Link } from '@/shared/i18n/routing';
import InputFormField from '@components/form-fields/input-form-field';
import { FacebookIcon, GoogleIcon } from '@components/icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@lib/utils';
import { Button } from '@ui/button';
import { Form } from '@ui/form';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import z from 'zod';
import Layout from './layout';

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

  const { t } = useTranslation();
  return (
    <Layout>
      <Form {...form}>
        <form
          className={cn('flex flex-col gap-6', className)}
          onSubmit={form.handleSubmit(onSubmit)}
          {...props}
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold">
              {t('Auth.signup-form.title')}
            </h1>
            <p className="text-muted-foreground text-balance text-sm">
              {t('Auth.signup-form.description')}
            </p>
          </div>
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <InputFormField
                name="firstName"
                label={t('Auth.signup-form.first-name-label')}
                placeholder={t('Auth.signup-form.first-name-placeholder')}
                control={form.control}
              />
              <InputFormField
                name="lastName"
                label={t('Auth.signup-form.last-name-label')}
                placeholder={t('Auth.signup-form.last-name-placeholder')}
                control={form.control}
              />
            </div>
            <InputFormField
              name="email"
              label={t('Auth.signup-form.email-label')}
              placeholder={t('Auth.signup-form.email-placeholder')}
              control={form.control}
            />
            <InputFormField
              name="password"
              label={t('Auth.signup-form.password-label')}
              placeholder={t('Auth.signup-form.password-placeholder')}
              control={form.control}
              type="password"
            />
            <Button type="submit" className="w-full">
              {t('Auth.signup-form.signup-button')}
            </Button>
            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
              <span className="bg-background text-muted-foreground relative z-10 px-2">
                {t('Auth.or-continue')}
              </span>
            </div>
            <div>
              <Button variant="outline" type="button" className="w-full">
                <GoogleIcon />
                {t('Auth.signup-form.signup-with-google')}
              </Button>
              <Button variant="outline" type="button" className="mt-3 w-full">
                <FacebookIcon />
                {t('Auth.signup-form.signup-with-facebook')}
              </Button>
            </div>
          </div>
          <div className="text-center text-sm">
            {t('Auth.signup-form.has-account')}{' '}
            <Link to="/login" className="underline underline-offset-4">
              {t('Auth.signup-form.login-link')}
            </Link>
          </div>
        </form>
      </Form>
    </Layout>
  );
}
