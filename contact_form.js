function submitForm(){
const nume = document.getElementById("name").value;
const email = document.getElementById("email").value;
const msg = document.getElementById("mesaj").value;
console.log(nume);
console.log(email);
console.log(msg);
console.warn("goodbye");
}
function timeBasedHello(){

const date =new Date("2026-02-25 18:28");
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