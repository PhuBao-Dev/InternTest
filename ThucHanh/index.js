const express = require('express')
const { redirect } = require('express/lib/response')
const db = require('./db')
const Infors = require('./models/infors')
const app = express()

db.connect();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', function (req, res, next) {
    Infors.find({})
        .then(infors => res.render('index', {infors}))
        .catch(next)
})

app.post('/submit', function (req, res) {
    const infor = new Infors(req.body);
    infor.save()
        .then(() => res.redirect('/'))
        .catch(err => {err})
})

app.get('/db', function (req, res, next) {
    Infors.find({})
    .then(infor => res.json(infor))
    .catch(next)
})


app.listen(3000)