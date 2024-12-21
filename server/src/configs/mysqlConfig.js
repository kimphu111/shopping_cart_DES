const mysqlConfig = {
    DB: "example",
    USER: "root",
    PASSWORD: "123456",
    HOST: "localhost",
    DIALECT: "mysql",
    POOL: {
        max: 5,
        min: 0,
        accquire: 30000,
        idle: 10000
    }
}

module.exports = { mysqlConfig }