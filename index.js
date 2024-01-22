let nome = document.querySelector("#nome_texto");

if (!nome.innerHTML) {
  let inserirNome = prompt("Insira seu nome");
  
  if (inserirNome == "" || !inserirNome) {
    nome.innerHTML = "Anonimo";
  } else {
    nome.innerHTML = inserirNome;
  }
}else{
  nome.innerHTML = inserirNome
}
 

