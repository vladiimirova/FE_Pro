const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;
const dataFilePath = path.join(__dirname, 'data.txt');

app.use(express.json());

function initializeDataFile() {
    if (!fs.existsSync(dataFilePath)) {
        fs.writeFileSync(dataFilePath, '[]');
    }
}

function readDataFromFile() {
    try {
        const data = fs.readFileSync(dataFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading data from file:', error);
        return [];
    }
}

function writeDataToFile(data) {
    try {
        fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error writing data to file:', error);
    }
}

initializeDataFile();

app.get('/items', (req, res) => {
    const items = readDataFromFile();
    res.json(items);
});

app.post('/items', (req, res) => {
    const items = readDataFromFile();

    if (!req.body.name) {
        return res.status(400).json({ error: "Name is required" });
    }

    const newItem = {
        id: items.length ? items[items.length - 1].id + 1 : 1,
        name: req.body.name
    };

    items.push(newItem);
    writeDataToFile(items);

    res.status(201).json(newItem);
});

app.put('/items/:id', (req, res) => {
    const items = readDataFromFile();
    const itemId = parseInt(req.params.id);
    const itemIndex = items.findIndex(item => item.id === itemId);

    if (!req.body.name) {
        return res.status(400).json({ error: "Name is required" });
    }

    if (itemIndex !== -1) {
        items[itemIndex].name = req.body.name;
        writeDataToFile(items);
        res.json(items[itemIndex]);
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
});

app.delete('/items/:id', (req, res) => {
    const items = readDataFromFile();
    const itemId = parseInt(req.params.id);
    const filteredItems = items.filter(item => item.id !== itemId);

    if (filteredItems.length !== items.length) {
        writeDataToFile(filteredItems);
        res.json({ message: 'Item deleted' });
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
