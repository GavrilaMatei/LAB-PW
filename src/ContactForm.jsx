import { useState } from 'react';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMessage] = useState('');
    const [FeedBack, setFeedback] = useState('');

    function handleFeedback(){
        if(name.length>3 && email.includes("@") && msg.length>10){
            setFeedback('Multumim, ' + name + '!');
            return
        }
        setFeedback('Completeaza toate campurile!');
        // setFeedback('Completeaza toate campurile!');
    }
    return(
        <div>
        <input 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nume"
        />  
        <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
        />  
        <textarea
            value={msg}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="mesaj"
        />
        <button onClick={handleFeedback}>submit</button>
        <p>{FeedBack}</p>
        </div>
    );
}
export default ContactForm;