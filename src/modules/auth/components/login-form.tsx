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
import { useTranslation } from 'react-i18next';
import Layout from './layout';
const useLocalizedSchema = () => {
  const { t } = useTranslation();
  return z.object({
    email: z.email(t('Global.form-fields.email.error')),
    password: z
      .string({ error: t('Global.form-fields.password.required-error') })
      .min(6, t('Global.form-fields.password.min-error', { min: 6 })),
  });
};

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  const formSchema = useLocalizedSchema();
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
            <h1 className="text-2xl font-bold">{t('Auth.login-form.title')}</h1>
            <p className="text-muted-foreground text-balance text-sm">
              {t('Auth.login-form.description')}
            </p>
          </div>
          <div className="grid gap-6">
            <InputFormField
              name="email"
              label={t('Global.form-fields.email.label')}
              control={form.control}
            />
            <div className="grid gap-3">
              <div className="flex items-center">
                <Label htmlFor="password">
                  {t('Global.form-fields.password.label')}
                </Label>
                <a
                  href="#"
                  className="ms-auto text-sm underline-offset-4 hover:underline"
                >
                  {t('Auth.login-form.forgot-password')}
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
              {t('Auth.login-form.login-button')}
            </Button>
            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
              <span className="bg-background text-muted-foreground relative z-10 px-2">
                {t('Auth.or-continue')}
              </span>
            </div>
            <div>
              <Button variant="outline" type="button" className="w-full">
                <GoogleIcon />
                {t('Auth.login-form.login-with-google')}
              </Button>
              <Button variant="outline" type="button" className="mt-3 w-full">
                <FacebookIcon />
                {t('Auth.login-form.login-with-facebook')}
              </Button>
            </div>
          </div>
          <div className="text-center text-sm">
            {t('Auth.login-form.no-account')}{' '}
            <Link to="/signup" className="underline underline-offset-4">
              {t('Auth.login-form.register-link')}
            </Link>
          </div>
        </form>
      </Form>
    </Layout>
  );
}
