const cliente = {
  nome: "Luffy",
  idade: 20,
  cpf: "123.456.789-10",
  arrayDeTelefone: ["(99) 99999-9999", "(88) 88888-8888", "(77) 7777-7777"],
  functionGetCPF() {
    return this.cpf;
  },
};

// adicionando um novo valor
cliente.endereco = "Rua dos Bobos";
console.log(cliente.endereco); // Rua dos Bobos
