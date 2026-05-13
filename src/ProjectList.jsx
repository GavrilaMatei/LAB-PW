import { useState, useEffect } from 'react';
import Card from './Card';
function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [term,setTerm] = useState('');
    const [title, setTitle] = useState('');
    const [tech, setTech] = useState('');
    const [editID, seteditID] = useState(null);
    const [editTitle, seteditTitle] = useState('');
    const [editTech, seteditTech] = useState('');

         useEffect(function() {
        fetch('http://localhost:3000/api/projects')
            .then(function(response) {
               return response.json(); 
          })
            .then(function(data) {
                setProjects(data);
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
     async function handleDelete(id) {
        if (window.confirm('Sigur doriti sa stergeti acest proiect?')) {
         try {
         const response = await fetch('http://localhost:3000/api/projects/' + id, {
         method: 'DELETE',
         });
        await response.json();
        setProjects(projects.filter(p => p._id !== id))
        } catch (err) {
            console.error('Eroare:', err);
        }
    }
    }
    async function handleToggle(id, currentDone){
        try {
            const response = await fetch('http://localhost:3000/api/projects/' + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ done : !currentDone}),
         });
            const updatedProject = await response.json();
            setProjects(projects.map(p => p._id === id ? updatedProject : p)) 
         } catch (err) {
            console.error('Eroare:', err);
         }
        
    }

        async function handleSave(id,title,tech){
        try {
         const response = await fetch('http://localhost:3000/api/projects/' + id, {
         method: 'PUT',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ title: title, tech: tech }),
         });
            const updatedProject = await response.json();
            setProjects(projects.map(p => p._id === id ? updatedProject : p)) 
            seteditID(null); 
            seteditTitle('');
            seteditTech('');
         } catch (err) {
         console.error('Eroare:', err);
         }
        
    }

    async function handleSubmit() {
         try {
                const response = await fetch('http://localhost:3000/api/projects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: title, tech: tech }),
            });
            const newProject = await response.json();
            setProjects([...projects, newProject]);
            setTitle(''); 
            setTech('');
            } catch (err) {
            console.error('Eroare:', err);
            }
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
                    return p.title.toLowerCase().includes(term.toLowerCase());}).map(function(item)  {
                    if(editID === item._id){
                        return (<div>
                                <p>
                                <input 
                                    value={editTitle}
                                    onChange={(e) => seteditTitle(e.target.value)}
                                    placeholder="Titlu"
                                />  
                                </p>
                                <p>
                                <input 
                                    value={editTech}
                                    onChange={(e) => seteditTech(e.target.value)}
                                    placeholder="Tech"
                                />  
                                </p>
                                <button onClick={()=>handleSave(item._id,editTitle,editTech)}>Confirm</button>
                                <button onClick={()=>seteditID(null)}>Anuleaza</button>
                        </div>
                    );}
                        else
                            return (<div key={item._id}><Card title={item.title} description={item.tech}/>
                                <button onClick={()=>handleDelete(item._id)}>Delete project</button>      
                                <button onClick={() => seteditID(item._id)}>Editeaza</button>
                                <button onClick={()=>handleToggle(item._id,item.done)}>Done/Undone</button> 
                                </div>
                        );

                })
            }   
            <p>numar de proiecte :{projects.length}</p>
            <p>Finalizate :{projects.filter(p=>p.done).length}</p>
            <p>numar de proiecte nefinalizate :{projects.filter(p=>!p.done).length}</p>
            <h3>Add Project</h3>
            <ol>
            <input 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Titlu"
            />  
            </ol>
            <ol><input 
                value={tech}
                onChange={(e) => setTech(e.target.value)}
                placeholder="Tech"
            /> 
            </ol>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}
export default ProjectList;