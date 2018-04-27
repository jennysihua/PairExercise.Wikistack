const models = require('./models');
const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express();
const wikiRouter = require('./routes/wiki.js')
const userRouter = require('./routes/user.js')

app.use('/wiki', wikiRouter)
app.use('/user', userRouter)
app.use(bodyParser.json())
app.use(morgan('dev'))

const PORT = 3000;

const init = async() => {
    await models.db.sync({force: true});
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}!`);
    })
}

init();

app.get('/', (req, res, next) => {
    res.redirect('/wiki');
  })
