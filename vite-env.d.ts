interface ImportMetaEnv {
  readonly VITE_TWITCH_USER: string;
  readonly VITE_CHANNEL_ID: string;
  readonly VITE_BASE_URL: string;
  readonly VITE_TWITCH_URL: string;
  readonly VITE_TWITCH_TOKEN_GENERATOR_CLIENT_ID: string;
  readonly VITE_TWITCH_TOKEN: string;
  readonly VITE_TWITCH_REFRESH_TOKEN: string;
  readonly VITE_TWITCH_CLIENT_ID: string;
  readonly VITE_TWITCH_SECRET: string;
  readonly VITE_SE_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
