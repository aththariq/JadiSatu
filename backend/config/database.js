const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'your-rds-endpoint.amazonaws.com',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
