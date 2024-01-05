const communication = require('./api/communication')
const permissions = require('./api/permissions')
const redis = require('./api/redis')
const roles = require('./api/roles')
const versions = require('./api/versions')

const logger = require('./server/logger')
const testTools = require('./test')
const utils = {
  authentication: require('./api/util/authentication'),
  availability: require('./api/util/availability'),
  currency: require('./api/util/currency'),
  encoding: require('./api/util/encoding'),
  environment: require('./api/util/environment'),
  list: require('./api/util/list'),
  listQueryBuilder: require('./api/util/listQueryBuilder'),
  locale: require('./api/util/locale'),
  pricing: require('./api/util/pricing'),
  time: require('./api/util/time'),
  transaction: require('./api/util/transaction'),
  transition: require('./api/util/transition'),
  user: require('./api/util/user'),
  validation: require('./api/util/validation'),
}

module.exports = {
  communication,
  permissions,
  redis,
  roles,
  versions,

  logger,
  testTools,
  utils,
}
