const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Project = require('./models/Project');
mongoose.connect('mongodb://localhost:27017/dashboard')
 .then(function() {
 console.log('Conectat la MongoDB!');
 })
 .catch(function(err) {
 console.error('Eroare conectare MongoDB:', err);
 });
const PORT = 3000;
app.use(express.json());
// Prima ruta: raspunde la GET /
app.get('/', function(req, res) {
 res.json({ message: 'Serverul functioneaza!' });
});

app.get('/api/projects', async function(req, res) {
 try {
 const projects = await Project.find();
 res.json(projects);
 } catch (err) {
 res.status(500).json({ error: 'Eroare ' + err });
 }
});

// POST /api/projects - adauga un proiect nou
app.post('/api/projects', function(req, res) {
 const newProject = {
 id: projects.length + 1,
 title: req.body.title,
 tech: req.body.tech,
 done: req.body.done || false,
 };
 projects.push(newProject);
 res.status(201).json(newProject);
});

app.delete('/api/projects/:id', function(req, res) { 
    const id = parseInt(req.params.id);
    const index = projects.findIndex(p => p.id === id);
    console.log(index);
    if(index === -1)
        res.status(404).json({ error: 'Not found' });
    else{
        projects.splice(index, 1) ;
        res.json({ message: 'Deleted' });
    }
 });

// Porneste serverul
app.listen(PORT, function() {
 console.log('Server pornit pe http://localhost:' + PORT);
});
