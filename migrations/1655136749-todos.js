exports.up = async function (sql) {
  // with `postgres` :: DB === sql``
  console.log(await sql`select * from "product"`);
};

exports.down = async function (sql) {
  // My pre-configured "undo" function
};
