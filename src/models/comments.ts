import type { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { db } from '../utils/db.ts';
import { comments } from './schema.ts';

export type Comment = InferSelectModel<typeof comments>;

export class CommentModel {
  static async create(comment: InferInsertModel<typeof comments>) {
    return db.insert(comments).values(comment).run();
  }

  static async getAll(): Promise<Comment[]> {
    return db.select().from(comments);
  }
}
