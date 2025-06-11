document.getElementById("formCadastro").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const usuario = { // Transformando objeto em string
    nome,
    email,
    senha
  };

  localStorage.setItem("usuario", JSON.stringify(usuario));
  localStorage.setItem("logado", "true");

  alert("Conta criada com sucesso!");
  window.location.href = "index.html";
});
