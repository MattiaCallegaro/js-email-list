//recupero email da dom
const inputEmail = document.getElementById('email');
//mi dichiaro la variabile endpoint dandogli come valore indirizzi=10
const endpoint="https://flynn.boolean.careers/exercises/api/random/mail"
//effettuo la chiamata ajax 
axios.get(endpoint).then(pippo => {
    //reuperare i valori generati
    const listaEmail = pippo.data.response;
    console.log(listaEmail);
})
//mi dichiaro la variabile listaEmail vuota
let listaEmail;

//mi creo un ciclo for per fare 10 controlli della funzione axios che mi genera una email casuale.
for(let i=0; i<10;i++){
    axios.get(endpoint).then(pippo => {
        //reuperare i valori generati
        const listaEmail = pippo.data.response;
        console.log(listaEmail);
    })

    inputEmail.innerHTML = listaEmail;
}



