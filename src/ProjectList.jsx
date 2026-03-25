import { useState, useEffect } from 'react';
import Card from './Card';
function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
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
            {
            projects.map(function(item, index) {
                    return <Card key={index} title={item.title} description={item.tech} />;
                })
            }
        </div>
    );
}
export default ProjectList;