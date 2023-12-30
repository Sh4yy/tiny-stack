
export const seed = async (knex) => {
  // Deletes ALL existing entries in comments table
  await knex('comments').del();
  // Inserts seed entries into comments table
  await knex('comments').insert([
    { author: 'John Doe', content: 'Hi, this is my first comment.' },
    { author: 'Jane Smith', content: 'Hey, John! It\'s nice to meet you.' },
    { author: 'John Doe', content: 'You too, Jane!' },
  ]);
};
