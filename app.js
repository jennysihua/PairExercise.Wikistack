const models = require('./models');
const express = require('express');

const app = express();
const wikiRouter = require('./routes/wiki.js')
const userRouter = require('./routes/user.js')

app.use('/wiki', wikiRouter)
app.use('/user', userRouter)


const PORT = 3000;

const init = async() => {
    await models.db.sync({force: true});
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}!`);
    })
}

init();


