const {
  getRedisClient,
  setPlatformId
} = require('../api/redis')

async function reset () {
  const client = getRedisClient()

  await client.flushdbAsync()
}

module.exports = {
  reset,
  setPlatformId
}
