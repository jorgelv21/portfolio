let nome = document.querySelector("#nome_texto");

let armazenarNome = sessionStorage.getItem("nome");

if (!armazenarNome) {
  let inserirNome = prompt("Insira seu nome");

  if (inserirNome == "" || !inserirNome) {
    nome.innerHTML = "Anônimo";
    sessionStorage.setItem("nome", "Anônimo");
  } else {
    nome.innerHTML = inserirNome;
    sessionStorage.setItem("nome", inserirNome);
  }
} else {
  nome.innerHTML = armazenarNome;
}
