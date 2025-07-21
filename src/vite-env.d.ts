/* eslint-disable no-unused-vars */
/// <reference types="vite/client" />

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
}
