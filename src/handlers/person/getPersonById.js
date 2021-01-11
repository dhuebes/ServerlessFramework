import commonMiddleware from "../../../lib/commonMiddleware";

async function getPersonById(event, context) {
    const { id } = event.pathParameters;

    let peopleData = {
        "data": [
            {
                "id": "1",
                "nome": "Marlon",
                "cpf": "12345678900",
                "tipo": "FUNCIONARIO",
                "celular": "47992370826",
                "telefone": "4730303030",
                "endereco": "Rua Itajaí",
                "bairro": "Vorstadt",
                "cidade": "Blumenau",
                "uf": "SC",
                "cep": "89015200",
                "numero": "123",
                "complemento": "casa"
            },
            {
                "id": "2",
                "nome": "Pedro",
                "cpf": "12345678900",
                "tipo": "TERCEIRO",
                "celular": "47992370000",
                "telefone": "",
                "endereco": "Rua Itajaí",
                "bairro": "Vorstadt",
                "cidade": "Blumenau",
                "uf": "SC",
                "cep": "89015200",
                "numero": "200",
                "complemento": "bloco a, apto 501"
            },
            {
                "id": "3",
                "nome": "Luciana",
                "cpf": "12345678900",
                "tipo": "FAMILIA",
                "celular": "47992374562",
                "telefone": "",
                "endereco": "Rua Itajaí",
                "bairro": "Vorstadt",
                "cidade": "Blumenau",
                "uf": "SC",
                "cep": "89015200",
                "numero": "543",
                "complemento": "casa"
            },
            {
                "id": "4",
                "nome": "Juka",
                "cpf": "12345678900",
                "tipo": "TERCEIRO",
                "celular": "47994570000",
                "telefone": "473326260202",
                "endereco": "Rua Itajaí",
                "bairro": "Vorstadt",
                "cidade": "Blumenau",
                "uf": "SC",
                "cep": "89015200",
                "numero": "433",
                "complemento": "bloco a, apto 501"
            },
            {
                "id": "5",
                "nome": "Aline",
                "cpf": "12345678900",
                "tipo": "FAMILIA",
                "celular": "47992370826",
                "telefone": "",
                "endereco": "Rua Itajaí",
                "bairro": "Vorstadt",
                "cidade": "Blumenau",
                "uf": "SC",
                "cep": "89015200",
                "numero": "123",
                "complemento": "casa"
            },
            {
                "id": "6",
                "nome": "João",
                "cpf": "12345678900",
                "tipo": "TERCEIRO",
                "celular": "47992370000",
                "telefone": "",
                "endereco": "Rua Itajaí",
                "bairro": "Vorstadt",
                "cidade": "Blumenau",
                "uf": "SC",
                "cep": "89015200",
                "numero": "200",
                "complemento": "bloco a, apto 501"
            },
            {
                "id": "7",
                "nome": "Jeff",
                "cpf": "12345678900",
                "tipo": "FAMILIA",
                "celular": "47992370826",
                "telefone": "",
                "endereco": "Rua Itajaí",
                "bairro": "Vorstadt",
                "cidade": "Blumenau",
                "uf": "SC",
                "cep": "89015200",
                "numero": "123",
                "complemento": "casa"
            },
            {
                "id": "8",
                "nome": "Alice",
                "cpf": "12345678900",
                "tipo": "TERCEIRO",
                "celular": "47992370000",
                "telefone": "",
                "endereco": "Rua Itajaí",
                "bairro": "Vorstadt",
                "cidade": "Blumenau",
                "uf": "SC",
                "cep": "89015200",
                "numero": "200",
                "complemento": "bloco a, apto 501"
            },
            {
                "id": "9",
                "nome": "Ana",
                "cpf": "12345678900",
                "tipo": "FAMILIA",
                "celular": "47992370826",
                "telefone": "",
                "endereco": "Rua Itajaí",
                "bairro": "Vorstadt",
                "cidade": "Blumenau",
                "uf": "SC",
                "cep": "89015200",
                "numero": "123",
                "complemento": "casa"
            },
            {
                "id": "10",
                "nome": "Denis",
                "cpf": "12345678900",
                "tipo": "TERCEIRO",
                "celular": "47992370000",
                "telefone": "",
                "endereco": "Rua Itajaí",
                "bairro": "Vorstadt",
                "cidade": "Blumenau",
                "uf": "SC",
                "cep": "89015200",
                "numero": "200",
                "complemento": "bloco a, apto 501"
            },
            {
                "id": "11",
                "nome": "Daniel",
                "cpf": "12345678900",
                "tipo": "FAMILIA",
                "celular": "47992370826",
                "telefone": "",
                "endereco": "Rua Itajaí",
                "bairro": "Vorstadt",
                "cidade": "Blumenau",
                "uf": "SC",
                "cep": "89015200",
                "numero": "123",
                "complemento": "casa"
            },
            {
                "id": "12",
                "nome": "Marcio",
                "cpf": "12345678900",
                "tipo": "TERCEIRO",
                "celular": "47992370000",
                "telefone": "",
                "endereco": "Rua Itajaí",
                "bairro": "Vorstadt",
                "cidade": "Blumenau",
                "uf": "SC",
                "cep": "89015200",
                "numero": "200",
                "complemento": "bloco a, apto 501"
            },
            {
                "id": "13",
                "nome": "Jonathan",
                "cpf": "12345678900",
                "tipo": "FAMILIA",
                "celular": "47992370826",
                "telefone": "",
                "endereco": "Rua Itajaí",
                "bairro": "Vorstadt",
                "cidade": "Blumenau",
                "uf": "SC",
                "cep": "89015200",
                "numero": "123",
                "complemento": "casa"
            },
            {
                "id": "14",
                "nome": "Maria",
                "cpf": "55545678900",
                "tipo": "TERCEIRO",
                "celular": "47992370000",
                "telefone": "",
                "endereco": "Rua Itajaí",
                "bairro": "Vorstadt",
                "cidade": "Blumenau",
                "uf": "SC",
                "cep": "89015200",
                "numero": "200",
                "complemento": "bloco a, apto 501"
            }
        ]
    };

    peopleData.data = peopleData.data.filter((item) => item.id == id);

    return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(peopleData.data[0]),
    };
}

export const handler = commonMiddleware(getPersonById);