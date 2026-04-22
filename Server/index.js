const express = require('express');
const app = express();
const PORT = 3000;
// Prima ruta: raspunde la GET /
app.get('/', function(req, res) {
 res.json({ message: 'Serverul functioneaza!' });
});
// Date (temporar in memorie, vom folosi MongoDB mai tarziu)
const projects = [
 { id: 1, title: "Pagina Personala", tech: "HTML, CSS", done: true },
 { id: 2, title: "Calculator Buget", tech: "JS", done: true },
 { id: 3, title: "Dashboard React", tech: "React", done: false },
 { id: 4, title: "API Meteo", tech: "React, API", done: false },
];
// GET /api/projects - returneaza toate proiectele
app.get('/api/projects', function(req, res) {
 res.json(projects);
});

app.get  ('/api/projects/:id',function(req,res){
    const result = projects.find(p =>
    p.id === parseInt(req.params.id)
    );
    if (result) res.json(result);
    else res.status(404).json({ error: 'Notfound' })
});

app.get  ('/api/stats',function(req,res){
    const result = {
        "total": projects.length,
        "done": projects.filter(p => p.done).length,
        "not done": projects.filter(p => !p.done).length
    }
    res.json(result);
});

// Porneste serverul
app.listen(PORT, function() {
 console.log('Server pornit pe http://localhost:' + PORT);
});
