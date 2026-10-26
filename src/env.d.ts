/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_MAKE_WEBHOOK_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
