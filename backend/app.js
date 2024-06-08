const express = require('express');
const sequelize = require('./config/database');
const userRouter = require('./routes/user');

const app = express();

app.use(express.json());
app.use('/api/users', userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  sequelize.sync();
});
