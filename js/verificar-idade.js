function verificarIdade() {
  const checked = localStorage.getItem("checked") === "true";
  if (checked) return null;

  const acimaDe18 = confirm("Você confirma que tem mais de 18 anos?");
  if (acimaDe18) return localStorage.setItem("checked", true);

  window.location = `${location.href}/pages/errors/menor-idade.html`;
}