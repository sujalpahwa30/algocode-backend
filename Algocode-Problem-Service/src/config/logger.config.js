// const winston = require('winston');
// const { LOG_DB_URL } = require('./server.config');
// require('winston-mongodb');

// const allowedTransports = [];

// // The below transport configuration enables logging on the console
// allowedTransports.push(new winston.transports.Console({
//     format : winston.format.combine(
//         winston.format.colorize(),
//         winston.format.timestamp({
//             format : 'YYYY-MM-DD HH:mm:ss'
//         }),
//         winston.format.printf((log) => `${log.timestamp} [${log.level}] : ${log.message}`)
//     )
// }));

// // The below transport configuration enables logging in mongodb database
// allowedTransports.push(new winston.transports.MongoDB({
//     level : 'error',
//     db : LOG_DB_URL,
//     collection : 'logs'
// }));

// // The below transport configuration enables logging in mongodb database
// allowedTransports.push(new winston.transports.File({
//     filename : `app.log`
// }))

// const logger = winston.createLogger({
//     // default formatting 
//     format : winston.format.combine(
//         // First arguement to the combine method is defining how we want the timestamp to come up
//         winston.format.timestamp({
//             format : 'YYYY-MM-DD HH:mm:ss'
//         }),
//         // Second arguement to the combine method which defines what is exactly going to be printed in log
//         winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}] : ${log.message}`)
//     ),
//     transports : allowedTransports
// });

// module.exports = logger;

const winston = require('winston');
require('winston-mongodb');
const { LOG_DB_URL } = require('./server.config');

const transports = [
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      winston.format.printf(log => `${log.timestamp} [${log.level}] : ${log.message}`)
    )
  }),

  // MongoDB transport with new parser/topology
  new winston.transports.MongoDB({
    level: 'error',
    db:    LOG_DB_URL,            // now includes '/yourDbName'
    collection: 'logs'
  }),

  new winston.transports.File({ filename: 'app.log' })
];

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf(log => `${log.timestamp} [${log.level.toUpperCase()}] : ${log.message}`)
  ),
  transports
});

module.exports = logger;
