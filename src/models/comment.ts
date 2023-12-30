import { type Knex } from 'knex';

export interface Comment {
  id: number;
  author: string;
  content: string;
  created_at: Date;
  updated_at: Date;
}

type CommentWriteableFields = Omit<Comment, 'id' | 'created_at' | 'updated_at'>;

export class CommentModel {
  private knex: Knex;

  constructor(knexInstance: Knex) {
    this.knex = knexInstance;
  }

  async getAll(): Promise<Comment[]> {
    return this.knex<Comment>('comments').select('*');
  }

  async create(comment: CommentWriteableFields): Promise<number[]> {
    return this.knex<CommentWriteableFields>('comments').insert(comment);
  }

  async deleteByID(id: number): Promise<number> {
    return this.knex<Comment>('comments').where('id', '=', id).del();
  }
}
