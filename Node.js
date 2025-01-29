const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/data', (req, res) => {
    const clientData = req.body;
    console.log('Received data:', clientData);

    // Process the data (e.g., save to a database)
    // ...

    res.json({ message: 'Data received successfully!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});