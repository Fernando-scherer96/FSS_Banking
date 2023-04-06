// Seleciona o formulário e o campo "Nome-beneficiario"
const form = document.getElementById('form-deposito');
const nomeBeneficiaria = document.getElementById('Nome-beneficiario');

// Define uma variável para validar o nome
let formEvalido = false; 

// Função para validar o nome
function validaNome(nomeCompleto){
  const nomeCompletoArray = nomeCompleto.split(' ');
  return nomeCompletoArray.length >= 2;
}

// Event listener para o submit do formulário
form.addEventListener('submit', function(event){
    event.preventDefault();

    // Seleciona os campos "Numero-conta" e "valor" e cria uma mensagem de sucesso com seus valores
    const NumerocontaBeneficiaria = document.getElementById('Numero-conta');
    const valorContaBeneficiaria = document.getElementById('valor');
    const menssagemSucesso = `Montante no valor: <b>${valorContaBeneficiaria.value}</b> na conta n°: <b>${NumerocontaBeneficiaria.value}</b> sobre a titularidade de <b>${nomeBeneficiaria.value}</b> foi feita com sucesso`;

    // Valida o nome
    formEvalido = validaNome(nomeBeneficiaria.value);
    if (formEvalido) {
      // Se o nome é válido, exibe mensagem de sucesso e limpa os campos
      const conteinerMensagem = document.querySelector('.mensagem-Sucesso');
      conteinerMensagem.innerHTML = menssagemSucesso;
      conteinerMensagem.style.display = 'block';
      nomeBeneficiaria.value = '';
      NumerocontaBeneficiaria.value = '';
      valorContaBeneficiaria.value = '';
    } else {
      // Se o nome não é válido, adiciona a classe "error" e exibe mensagem de erro
      nomeBeneficiaria.classList.add('error');
      document.querySelector('.erro-mensagem').style.display = 'block';
    }
});

// Event listener para cada tecla digitada no campo "Nome-beneficiario"
nomeBeneficiaria.addEventListener('keyup', function(event){
  // Valida o nome atual
  formEvalido = validaNome(event.target.value);

  if (!formEvalido) {
    // Se o nome não é válido, adiciona a classe "error" e exibe mensagem de erro
    nomeBeneficiaria.classList.add('error');
    document.querySelector('.erro-mensagem').style.display = 'block';
  } else {
    // Se o nome é válido, remove a classe "error" e esconde a mensagem de erro
    nomeBeneficiaria.classList.remove('error');
    document.querySelector('.erro-mensagem').style.display = 'none';
  }
});
