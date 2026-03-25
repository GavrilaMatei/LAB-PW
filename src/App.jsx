import Card from './Card';
import { useState } from 'react';
import QuickNote from './QuickNote';
import TodoList from './TodoList';
import ContactForm from './ContactForm';
import Clock from './Clock';
import ProjectList from './ProjectList';
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
    <Clock/>
    <h1>Dashboard</h1>
    <ProjectList/>

    <button onClick={() => setCount(count + 1)}>+1 button</button>
    <button onClick={() => setCount(count - 1)}>-1 button</button>
    <button onClick={() => setCount(0)}>reset</button>
    <p>Ai apasat de {count} ori</p>
    
    <QuickNote />
    <TodoList />
    <ContactForm/>
    </div>
  );
}

export default App;