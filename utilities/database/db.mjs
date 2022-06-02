import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

const sql = postgres(); // will use psql environment variables

console.log(await sql`SELECT * FROM "product"`);

async function getAllProducts() {
  return await sql`SELECT * FROM "product"`;
}

async function getProduct(id) {
  const [product] = await sql`SELECT * FROM "product" WHERE id = ${id}`;
  return product;
}

await sql.end();

export default sql;
