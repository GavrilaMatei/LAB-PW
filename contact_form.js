const form = document.getElementById("MSG-form");
form.addEventListener("submit", validate);


function validate(event){
    const nume = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("mesaj").value;
    if(nume.length<=2){
        event.preventDefault(); 
        document.getElementById("form-feedback").textContent = "nume prea scurt";
        document.getElementById("form-feedback").style.color = "red";
    }
    else if(!email.includes("@")){
        event.preventDefault(); 
        document.getElementById("form-feedback").textContent = "email-ul trebuie sa contina @";
        document.getElementById("form-feedback").style.color = "red";
    }
    else if(msg.length<=10){
        event.preventDefault(); 
        document.getElementById("form-feedback").textContent = "Mesajul trebuie sa fie de minim 10 caractere";
        document.getElementById("form-feedback").style.color = "red";
    }
    else{
        event.preventDefault(); 
        document.getElementById("form-feedback").textContent = "Mesajul a fost trimis";
        document.getElementById("form-feedback").style.color = "green";
    }
}
function timeBasedHello(){
const date =new Date();
const dataPos =document.querySelector('header p');
console.log(date);
const hour =date.getHours();
if (hour>=6 && hour<12){
    dataPos.textContent = "Buna diminiata! Bine ai venit pe pagina mea web";
}
else if(hour>=12 && hour<18){
    dataPos.textContent = "Buna ziua! Bine ai venit pe pagina mea web";
}
else{
    dataPos.textContent = "Buna seara! Bine ai venit pe pagina mea web";
}
}
timeBasedHello();