import GitHub from '@auth/core/providers/github';
import { DrizzleAdapter } from '@auth/drizzle-adapter';

import { db } from './src/utils/db';

import type { AuthConfig } from '@auth/core';

export default {
  adapter: DrizzleAdapter(db),
  providers: [
    GitHub({
      clientId: import.meta.env.GITHUB_CLIENT_ID,
      clientSecret: import.meta.env.GITHUB_CLIENT_SECRET
    })
  ]
} satisfies AuthConfig;
