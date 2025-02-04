const clicou = () => {
  let primeiro = document.getElementById("first").value;
  let segundo = document.getElementById("second").value;
  let operacao = document.getElementById("operation").value;

  let resultado;

  switch (operacao) {
    case "soma":
      resultado = parseFloat(primeiro) + parseFloat(segundo);
      break;
    case "sub":
      resultado = parseFloat(primeiro) - parseFloat(segundo);
      break;
    case "mult":
      resultado = parseFloat(primeiro) * parseFloat(segundo);
      break;
    case "elev":
      resultado = parseFloat(primeiro) ** parseFloat(segundo);
      break;
    case "div":
      if (segundo !== 0) {
        resultado = parseFloat(primeiro) / parseFloat(segundo);
      } else {
        resultado = "Error: Division by zero!";
      }
      break;
    default:
      resultado = "Invalid operation!";
  }

  document.getElementById("result").innerText =
    "O resultado da conta é: " + resultado;
};
