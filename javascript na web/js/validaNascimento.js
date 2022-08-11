const validadores = {
  dataNascimneto: (input) => validaDataDeNascimento(input),
};

const tiposDeErro = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const mensagensDeErro = {
  nome: {
    valueMissing: "O campo nome não pode estar vazio.",
  },
  email: {
    valueMissing: "O campo email não pode estar vazio.",
    typeMismatch: "O email digitado não é válido.",
  },
  senha: {
    valueMissing: "O campo senha não pode estar vazio.",
    patternMismatch:
      "A senha deve conter 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caracter especial e pelo menos 6 caracteres",
  },
  dataNascimento: {
    valueMissing: "O campo data de nascimento não pode estar vazio.",
    customError: "Você deve ser maior que 18 anos para se cadastrar",
  },
};

export function valida(input) {
  const tipoDeInput = input.dataset.tipo;

  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }

  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalido");
    input.parentElement.querySelector(".input-mensagem-erro").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalido");
    input.parentElement.querySelector(".input-mensagem-erro").innerHTML =
      mostrarMensagemDeErro(tipoDeInput, input);
  }
}

function mostrarMensagemDeErro(tipoDeInput, input) {
  let mensagem = "";

  tiposDeErro.forEach((erro) => {
    if (input.validity[erro]) {
      mensagem = mensagensDeErro[tipoDeInput][erro];
    }
  });

  return mensagem;
}

function validaDataDeNascimento(input) {
  const dataRecebida = new Date(input.value);
  let mensagem = maiorQue18(dataRecebida)
    ? ""
    : "Você precisa ter mais de 18 anos";

  input.setCustomValidity(mensagem);
}

function maiorQue18(data = new Date()) {
  const dataAtual = new Date();
  const dataMais18 = new Date(
    data.getUTCFullYear() + 18,
    data.getUTCMonth(),
    data.getUTCDate()
  );

  return dataMais18 <= dataAtual;
}
