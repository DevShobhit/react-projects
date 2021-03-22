const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
const path = require('path');

const pdfTemplate = require('./Template');

const app = express();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('Resume.pdf', (err) => {
        if (err) {
            res.send(Promise.reject());
            console.log(err);
        }

        res.send(Promise.resolve());
        console.log('Success');
    });
});


app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/Resume.pdf`);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
