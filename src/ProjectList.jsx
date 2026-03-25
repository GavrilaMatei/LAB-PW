import { useState, useEffect } from 'react';
import Card from './Card';
function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [term,setTerm] = useState('');

         useEffect(function() {
        fetch('/data/projects.json')
            .then(function(response) {
               return response.json(); 
          })
            .then(function(data) {
                setProjects(data.projects);
                setLoading(false);
                
         })
            .catch(function(err){
                setError('eroare la incarcarea datelor' + err);
                setLoading(false);
            });
         
    }, []);
    if (loading) {
        return <p>Se incarca...</p>;
    }
    if (error){
        return(<div>{error}</div>)
    }
    return (
        <div>
            <h3>Proiecte</h3>
            <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
             /> 
            {
                projects.filter(function(p){
                    return p.title.toLowerCase().includes(term.toLowerCase());}).map(function(item, index) {
                    return <Card key={index} title={item.title} description={item.tech} />;
                })
            }   
            <p>numar de proiecte :{projects.length}</p>
            <p>Finalizate :{projects.filter(p=>p.done).length}</p>
            <p>numar de proiecte nefinalizate :{projects.filter(p=>!p.done).length}</p>
        </div>
    );
}
export default ProjectList;