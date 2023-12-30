import Knex from 'knex';
import knexConfig from '../../knexfile.mjs';
import { CommentModel } from '../models/comment.ts';

const knex = Knex(
  import.meta.env.PROD ? knexConfig.production : knexConfig.development
);

// Comment Model instance
export const commentsModel = new CommentModel(knex);
