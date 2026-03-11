const OL = document.getElementById("educatie");
const educatie = OL.getElementsByTagName("li");
const listaEducatie = [];
for (let i = 0; i < educatie.length; i++) {
    listaEducatie.push(educatie[i].textContent);
}
const filtru1 = listaEducatie.filter(function(n) {
    return n.includes("2020");
});

const filtru2 = listaEducatie.filter(function(n) {
    return n.includes("Scoala");
});
const firstOnly =[];
listaEducatie.forEach(function(n) {
    let m = n.split(" ");
    firstOnly.push(m[0])
});
const durata = listaEducatie.reduce((total, element) => {
    const textDurata = element.match(/(\d{4})-(\d{4}|prezent)/);
        const start = parseInt(textDurata[1]);
        let end;
        if (textDurata[2] === "prezent") {
            end = new Date().getFullYear();
        } else {
            end = parseInt(textDurata[2]);
        }
        return total + (end - start);
}, 0);

console.log(filtru1);
console.log(filtru2);
console.log(listaEducatie);
console.log(firstOnly);
console.log("Total ani de studiu:", durata);