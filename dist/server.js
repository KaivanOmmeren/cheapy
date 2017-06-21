const express = require('express');
const request = require('request');
const crawler = require('./crawler');


crawler();


const app = express();

app.get('/api/proxy', (req, res) => req.pipe(request(`${req.query.url}&apikey=BE11F11C7C0B49F9A4EF3D198E2FA6C0`)).pipe(res));

app.use('/static/', express.static(`${__dirname}/static`));

app.get('*', (req, res) => res.sendFile(`${__dirname}/index.html`));

console.info(`Listening on port: ${process.env.PORT || 3000}`);

app.listen(process.env.PORT || 3000);