const models = require('./models');
const express = require('express');

const app = express();

const PORT = 3000;

const init = async() => {
    // await models.User.sync();
    // await models.Page.sync();
    await models.db.sync({force: true});
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}!`);
    })
}

init();

