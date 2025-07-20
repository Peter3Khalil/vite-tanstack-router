/// <reference types="vite/client" />

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
