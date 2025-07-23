import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
    format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}\n`),
  ),

  transports: [
    new transports.File({ filename: '.logs/info.log', level: 'info' }),
    new transports.File({ filename: '.logs/error.log', level: 'error' }),
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.simple()
      ),
    }),
  ],
});

export default logger;