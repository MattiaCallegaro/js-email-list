//recupero email da dom
const inputEmail = document.getElementById('email');
//mi dichiaro la variabile endpoint dandogli come valore indirizzi=10
const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail"

//era sbagliato scriverlo
// //effettuo la chiamata ajax 
// axios.get(endpoint).then(pippo => {
//     //reuperare i valori generati
//     const listaEmail = pippo.data.response;

//     inputEmail.innerHTML = listaEmail;
// })


//mi creo un ciclo for per fare 10 controlli della funzione axios che mi genera una email casuale.
for (let i = 0; i < 10; i++) {
    axios.get(endpoint).then(pippo => {
        //reuperare i valori generati
        const listaEmail = pippo.data.response;
        console.log(listaEmail);
//mi stampo in pagina le email 10 volte perchè il ciclo for è stato eseguito 10 volte e l'ho scritto dentro
        inputEmail.innerHTML += `<li class="list-group-item text-center shadow-none p-2 mb-4 bg-body-tertiary rounded">${listaEmail}</li>`;
    })

}



