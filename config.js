const env = process.env;

const config = {
  db: {
    host: env.DB_HOST ||'bm7ko5tjsbqgrwtjybxr-mysql.services.clever-cloud.com',
    user: env.DB_USER ||'ux1dxncdn01f7u3c',
    password: env.DB_PASSWORD ||'THpejK1AhvQphfOc7M1q',
    database: env.DB_NAME || 'bm7ko5tjsbqgrwtjybxr',
    waitForConnections: true,
    connectionLimit: env.DB_CONN_LIMIT || 2,
    debug: env.DB_DEBUG || false
  },
};
  
module.exports = config;