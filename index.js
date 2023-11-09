//서버구현
const express = require('express');
const app = express();
const path = require('path');
const reddit_data = require('./data.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.get('/cats', (req, res) => {
    const cats = ['Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'];
    res.render('cats.ejs', { cats });
});
app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 100) + 1;
    res.render('random.ejs', { num });
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = reddit_data[subreddit];
    res.render('subreddit.ejs', { ...data }); //...를 사용해서 data를 복사해서 전달한다 ...를 사용해서 넘기면 템플릿에서 바로 키로 값에 접근가능
});
app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000!!!');
});
