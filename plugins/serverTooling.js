// Following objects are exposed on server object as well
// and can be required from a standalone plugin repo with stelace-server installed as devDependency.
// But we can’t require them from plugins within server project as it would entail circular dependencies.

const lifecycle = require('../test/lifecycle')
const auth = require('../test/auth')
const util = require('../test/util')
const factory = require('../test/fixtures/factory')
const fixtures = require('../test/fixtures')
const connection = require('../test/connection')

const permissions = require('../api/permissions')
const redis = require('../api/redis')
const roles = require('../api/roles')
const versions = require('../api/versions')

const time = require('../api/util/time')
const encoding = require('../api/util/encoding')
const validation = require('../api/util/validation')
const math = require('../api/util/math')

module.exports = {
  permissions,
  redis,
  roles,
  versions,

  testTools: {
    lifecycle,
    auth,
    util,
    factory,
    fixtures,
    connection
  },
  utils: {
    time,
    encoding,
    validation,
    math
  }
}
