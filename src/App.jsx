import Card from './Card';
import { useState } from 'react';
import QuickNote from './QuickNote';

function App() {
  const [count, setCount] = useState(0);
  const projects = [
  { title: "Proiect 1", description: "Pagina personala" },
  { title: "Proiect 2", description: "Calculator buget" },
  { title: "Proiect 3", description: "Dashboard React" },
  ];
  return (
  <div>
  <h1>Dashboard</h1>

  {projects.map(function(item, index) {
  return <Card key={index} title={item.title} description={item.description} />;
  })}

   <button onClick={() => setCount(count + 1)}>+1 button</button>
   <button onClick={() => setCount(count - 1)}>-1 button</button>
   <button onClick={() => setCount(0)}>reset</button>
  <p>Ai apasat de {count} ori</p>
  
  <QuickNote />
  </div>

  );
}

export default App;