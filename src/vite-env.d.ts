/* eslint-disable no-unused-vars */
/// <reference types="vite/client" />

import 'i18next';
import ar from '@shared/i18n/ar.json';
import en from '@shared/i18n/en.json';

import type { TFunction } from 'i18next';
import { router } from './main';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

declare global {
  interface ImportMetaEnv {
    readonly VITE_API_URL: string;
  }
}

declare module 'i18next' {
  interface i18n {
    changeLanguage(
      lng?: 'ar' | 'en',
      callback?: Callback | undefined
    ): Promise<TFunction>;
  }

  interface CustomTypeOptions {
    defaultNS: 'ar';
    resources: {
      ar: typeof ar;
      en: typeof en;
    };
  }
}
