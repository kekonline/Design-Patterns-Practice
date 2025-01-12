// Functional Query Builder

// Step 1: Initialize an empty query object
const createQuery = () => ({
    select: "*",
    from: "",
    where: [],
    limit: null,
});

// Step 2: Functions to modify specific parts of the query
const select = (query, columns) => ({
    ...query,
    select: columns.join(", "),
});

const from = (query, table) => ({
    ...query,
    from: table,
});

const where = (query, condition) => ({
    ...query,
    where: [...query.where, condition],
});

const limit = (query, num) => ({
    ...query,
    limit: num,
});

// Step 3: Compose the builder function
const buildQuery = (table, columns = ["*"], conditions = [], rowLimit = null) => {
    let query = createQuery();
    query = from(query, table);
    query = select(query, columns);

    conditions.forEach(condition => {
        query = where(query, condition);
    });

    if (rowLimit) {
        query = limit(query, rowLimit);
    }

    // Construct the SQL query string
    let sql = `SELECT ${query.select} FROM ${query.from}`;

    if (query.where.length > 0) {
        sql += ` WHERE ${query.where.join(" AND ")}`;
    }

    if (query.limit !== null) {
        sql += ` LIMIT ${query.limit}`;
    }

    return sql;
};

// Usage
const sqlQuery = buildQuery("users", ["name", "email"], ["age > 25", "active = 1"], 10);
console.log(sqlQuery);  // Output: SELECT name, email FROM users WHERE age > 25 AND active = 1 LIMIT 10
