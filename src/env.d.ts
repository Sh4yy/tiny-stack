/// <reference types="astro/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly GITHUB_CLIENT_ID: string;
  readonly GITHUB_CLIENT_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
