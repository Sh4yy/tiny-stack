import {
  accounts,
  comments,
  sessions,
  users,
  verificationTokens
} from './schema.ts';

import type { InferSelectModel } from 'drizzle-orm';

export type Account = InferSelectModel<typeof accounts>;

export type Comment = InferSelectModel<typeof comments>;

export type Session = InferSelectModel<typeof sessions>;

export type User = InferSelectModel<typeof users>;

export type VerificationToken = InferSelectModel<typeof verificationTokens>;
