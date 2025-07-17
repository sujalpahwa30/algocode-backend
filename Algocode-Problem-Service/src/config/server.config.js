const dotenv = require('dotenv');
dotenv.config();

// Build Main App DB URL
const dbUser = encodeURIComponent(process.env.DB_USER);
const dbPass = encodeURIComponent(process.env.DB_PASS);
const dbCluster = process.env.DB_CLUSTER;
const dbName = process.env.DB_NAME;
const atlasDbUrl = `mongodb+srv://${dbUser}:${dbPass}@${dbCluster}/${dbName}?retryWrites=true&w=majority`;

// Build Logger DB URL
const logUser = encodeURIComponent(process.env.LOG_DB_USER);
const logPass = encodeURIComponent(process.env.LOG_DB_PASS);
const logCluster = process.env.LOG_DB_CLUSTER;
const logDbName = process.env.LOG_DB_NAME;
const logDbUrl = `mongodb+srv://${logUser}:${logPass}@${logCluster}/${logDbName}?retryWrites=true&w=majority&appName=Cluster0`;

module.exports = {
    PORT: process.env.PORT || 3005,
    ATLAS_DB_URL: atlasDbUrl, // Now correctly built and NOT undefined
    LOG_DB_URL: logDbUrl,
    NODE_ENV: process.env.NODE_ENV || "development"
};