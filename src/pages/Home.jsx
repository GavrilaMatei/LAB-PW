import { useState,useEffect } from 'react';

function Home() {
const [Data, setData] = useState({
   total : 0,
   done : 0,
   inProgres : 0,
});
useEffect(function() {
fetch('http://localhost:3000/api/stats')
      .then(function(response) {
         return response.json(); 
   })
      .then(function(data) {
         setData(data);
   })
      .catch(function(err){
         console.error('eroare la incarcarea datelor' + err);
   });
}, []);


 return (
   <div>
   <h2>Home</h2>
   <p>Bine ai venit pe dashboard-ul meu!</p>
   
   <p>Total proiecte: {Data.total}</p>
   <p>Finalizate: {Data.done}</p>
   <p>În lucru: {Data.inProgress}</p>
    
 </div>
 );
}
export default Home;