module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "<YOUR MYSQL DATABASE PASSWORD>",
    DB: "demodb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };