const clicou = () => {
  let primeiro = document.getElementById("first").value;
  let segundo = document.getElementById("second").value;

  let resultado = parseInt(primeiro) + parseInt(segundo);

  document.getElementById("result").innerText = "O resultado da conta é: " + resultado;
};
