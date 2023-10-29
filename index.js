//서버구현
const express = require('express');
const app = express();

app.use((req, res) => {
    res.send('<h1>I GOT YOUR RESPONSE!!!<h1>');
});

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000!!!');
});
