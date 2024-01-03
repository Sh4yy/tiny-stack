import GitHub from '@auth/core/providers/github';

import type { AuthConfig } from '@auth/core';

export default {
  providers: [
    GitHub({
      clientId: import.meta.env.GITHUB_CLIENT_ID,
      clientSecret: import.meta.env.GITHUB_CLIENT_SECRET
    })
  ]
} satisfies AuthConfig;
