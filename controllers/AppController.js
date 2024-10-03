const redisClient = require('../utils/redis');
const dbClient = require('../utils/db');

class AppController {
  static getStatus(req, res) {
    const redisAlive = redisClient.isAlive();
    const dbAlive = dbClient.isAlive();
    res.status(200).json({
      redis: redisAlive,
      db: dbAlive,
    });
  }

  static getStats(req, res) {
    const nbUsers = redisClient.nbUsers();
    const nbFiles = dbClient.nbFiles();
    res.status(200).json({
      users: nbUsers,
      db: nbFiles,
    });
  }
}
module.exports = AppController;
