require('dotenv').config();
const logger = require('./bin/helpers/utils/logger');
const AppServer = require('./bin/app/server');
const appServer = new AppServer();
const port = process.env.PORT || 1337;

appServer.server.listen(port, () => {
  const ctx = 'app-listen';
  logger.info(ctx, `${appServer.server.name} started, listening at ${appServer.server.url}`, 'initiate application');
  if (process.env.NODE_ENV !== 'local') {
    logger.error(ctx, `${appServer.server.name} restarted, listening at ${appServer.server.url}`, 'restart application');
  }
});
