const cliente = {
    nome: 'João Silva',
    email: 'joaosilva@gmail.com',
    telefone: '(11) 99999-9999',
    endereco: {
      rua: 'Rua A',
      numero: '123',
      complemento: 'Apto 101',
      bairro: 'Centro',
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '01010-010'
    },
    pedidos: [
      {
        id: 1,
        data: '2023-03-27',
        produtos: [
          {
            nome: 'Camiseta',
            quantidade: 2,
            precoUnitario: 29.99
          },
          {
            nome: 'Calça Jeans',
            quantidade: 1,
            precoUnitario: 89.99
          }
        ]
      },
      {
        id: 2,
        data: '2023-03-28',
        produtos: [
          {
            nome: 'Tênis',
            quantidade: 1,
            precoUnitario: 149.99
          }
        ]
      }
    ]
  };
  

  console.log(cliente)