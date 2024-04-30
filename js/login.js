const nomeUsuarioElement = document.getElementById('usuario'),
  senhaElement = document.getElementById('password')

function enviarLogin() {
  if (nomeUsuarioElement.value !== '1234') {
    alert('Nome de usuário incorreto!')
  } else if (senhaElement.value !== '1234') {
    alert('Senha incorreta!')
  } else {
    alert('Login efetuado com sucesso!')
    window.location = `${location.origin}/index.html`;
  }
}