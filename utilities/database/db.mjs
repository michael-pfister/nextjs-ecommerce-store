import camelcaseKeys from 'camelcase-keys';
import { config } from 'dotenv-safe';
import postgres from 'postgres';
import setPostgresDefaultsOnHeroku from '../setPostgresDefaultsOnHeroku';

setPostgresDefaultsOnHeroku();
config();

let sql;

if (process.env.NODE_ENV === 'production' && process.env.DATABASE_URL) {
  // only run this on heroku
  // Heroku needs SSL connections but
  // has an "unauthorized" certificate
  // https://devcenter.heroku.com/changelog-items/852
  sql = postgres({ ssl: { rejectUnauthorized: false } });
} else {
  sql = postgres(); // will use psql environment variables
}

export async function getAllProducts() {
  return camelcaseKeys(await sql`SELECT * FROM "product"`);
}

export async function getProduct(id) {
  const [product] = await sql`SELECT * FROM "product" WHERE id = ${id}`;
  return camelcaseKeys(product);
}

// await sql.end();

export default sql;
