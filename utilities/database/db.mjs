import camelcaseKeys from 'camelcase-keys';
import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

const sql = postgres(); // will use psql environment variables

export async function getAllProducts() {
  return camelcaseKeys(await sql`SELECT * FROM "product"`);
}

export async function getProduct(id) {
  const [product] = await sql`SELECT * FROM "product" WHERE id = ${id}`;
  return camelcaseKeys(product);
}

// await sql.end();

export default sql;
