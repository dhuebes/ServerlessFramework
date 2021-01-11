import commonMiddleware from "../../../lib/commonMiddleware";

async function getCustomers(event, context) {

    let customersData = {
        data: [
            {
                id: 1,
                tipo: "PF",
                nome: "Daniel",
                documento: "00000000000",
                celular: "47900000000",
                telefone: "4733330000",
                cep: "89041200",
                uf: "SC",
                cidade: "Blumenau",
                bairro: "Velha",
                endereco: "Rua Imperatriz Leopoldina",
                numero: 92,
                complemento: "Apto 100",
                contatos: []
            },
            {
                id: 2,
                tipo: "PF",
                nome: "Pedro",
                documento: "00000000000",
                celular: "47900000000",
                telefone: "4733330000",
                cep: "89041200",
                uf: "SC",
                cidade: "Blumenau",
                bairro: "Velha",
                endereco: "Rua Imperatriz Leopoldina",
                numero: 92,
                complemento: "Apto 100",
                contatos: []
            },
            {
                id: 3,
                tipo: "PF",
                nome: "Maria",
                documento: "00000000000",
                celular: "47900000000",
                telefone: "4733330000",
                cep: "89041200",
                uf: "SC",
                cidade: "Blumenau",
                bairro: "Velha",
                endereco: "Rua Imperatriz Leopoldina",
                numero: 92,
                complemento: "Apto 100",
                contatos: []
            },
            {
                id: 4,
                tipo: "PF",
                nome: "Gabriel",
                documento: "00000000000",
                celular: "47900000000",
                telefone: "4733330000",
                cep: "89041200",
                uf: "SC",
                cidade: "Blumenau",
                bairro: "Velha",
                endereco: "Rua Imperatriz Leopoldina",
                numero: 92,
                complemento: "Apto 100",
                contatos: []
            },
            {
                id: 5,
                tipo: "PF",
                nome: "Julia",
                documento: "00000000000",
                celular: "47900000000",
                telefone: "4733330000",
                cep: "89041200",
                uf: "SC",
                cidade: "Blumenau",
                bairro: "Velha",
                endereco: "Rua Imperatriz Leopoldina",
                numero: 92,
                complemento: "Apto 100",
                contatos: []
            },
            {
                id: 6,
                tipo: "PJ",
                nome: "Empresa X",
                documento: "99999999999999",
                celular: "47900000000",
                telefone: "4733330000",
                cep: "89041200",
                uf: "SC",
                cidade: "Blumenau",
                bairro: "Velha",
                endereco: "Rua Imperatriz Leopoldina",
                numero: 92,
                complemento: "Apto 100",
                contatos: [
                    {
                        nome: "Ana",
                        tipo: "TELEFONE",
                        ramal: "123",
                        telefone: "47993330101",
                        email: "ana@empresax.com.br"
                    },
                    {
                        nome: "João",
                        tipo: "TELEFONE",
                        ramal: "321",
                        telefone: "4733330101",
                        email: "joao@empresax.com.br"
                    }
                ]
            },
            {
                id: 7,
                tipo: "PJ",
                nome: "Empresa 2",
                documento: "99999999999999",
                celular: "47900000000",
                telefone: "4733330000",
                cep: "89041200",
                uf: "SC",
                cidade: "Blumenau",
                bairro: "Velha",
                endereco: "Rua Imperatriz Leopoldina",
                numero: 92,
                complemento: "Apto 100",
                contatos: [
                    {
                        nome: "Ana",
                        tipo: "TELEFONE",
                        ramal: "123",
                        telefone: "47993330101",
                        email: "ana@empresax.com.br"
                    },
                    {
                        nome: "João",
                        tipo: "TELEFONE",
                        ramal: "321",
                        telefone: "4733330101",
                        email: "joao@empresax.com.br"
                    }
                ]
            },
            {
                id: 8,
                tipo: "PJ",
                nome: "Empresa 3",
                documento: "99999999999999",
                celular: "47900000000",
                telefone: "4733330000",
                cep: "89041200",
                uf: "SC",
                cidade: "Blumenau",
                bairro: "Velha",
                endereco: "Rua Imperatriz Leopoldina",
                numero: 92,
                complemento: "Apto 100",
                contatos: [
                    {
                        nome: "Ana",
                        tipo: "TELEFONE",
                        ramal: "123",
                        telefone: "47993330101",
                        email: "ana@empresax.com.br"
                    },
                    {
                        nome: "João",
                        tipo: "TELEFONE",
                        ramal: "321",
                        telefone: "4733330101",
                        email: "joao@empresax.com.br"
                    }
                ]
            }
        ]
    };

    return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(customersData),
    };
}

export const handler = commonMiddleware(getCustomers);