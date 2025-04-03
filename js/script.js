//recupero email da dom
const inputEmail = document.getElementById('email');
//mi dichiaro la variabile endpoint dandogli come valore indirizzi=10
const endpoint="https://flynn.boolean.careers/exercises/api/random/mail"
//effettuo la chiamata ajax 
axios.get(endpoint).then(pippo => {
    //reuperare i valori generati
    const listaEmail = pippo.data.response;
    // console.log(listaEmail);


})