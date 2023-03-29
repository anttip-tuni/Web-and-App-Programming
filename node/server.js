const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.post('/addUser', (req, res) => {
    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error reading file');
        } else {
            const users = JSON.parse(data);
            users.push(req.body);

            fs.writeFile('users.json', JSON.stringify(users, null, 2), 'utf8', (err) => {
                if (err) {
                    console.log(err);
                    res.status(500).send('Error writing file');
                } else {
                    res.status(200).send('User added successfully');
                }
            });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});