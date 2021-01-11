import commonMiddleware from "../../../lib/commonMiddleware";

async function getUsers(event, context) {

  let usersData = {
    data: [
      {
        "id": "1",
        "tipo": "SYSADMIN",
        "habilitado": "true",
        "email": "teste1@teste.com",
        "pessoa": {
          "id": "2",
          "nome": "Pedro"
        }
      },
      {
        "id": "2",
        "tipo": "PROPRIETARIO",
        "habilitado": "false",
        "email": "teste2@teste.com",
        "pessoa": {
          "id": "1",
          "nome": "Marlon"
        }
      },
      {
        "id": "3",
        "tipo": "ADMINISTRADOR",
        "habilitado": "false",
        "email": "teste3@teste.com",
        "pessoa": {
          "id": "1",
          "nome": "Marlon"
        }
      },
      {
        "id": "4",
        "tipo": "ADMINISTRADOR",
        "habilitado": "true",
        "email": "teste4@teste.com",
        "pessoa": {
          "id": "3",
          "nome": "Luciana"
        }
      },
      {
        "id": "5",
        "tipo": "ADMINISTRADOR",
        "habilitado": "true",
        "email": "teste5@teste.com",
        "pessoa": {
          "id": "1",
          "nome": "Marlon"
        }
      },
      {
        "id": "6",
        "tipo": "PROPRIETARIO",
        "habilitado": "true",
        "email": "teste6@teste.com",
        "pessoa": {
          "id": "10",
          "nome": "Denis"
        }
      },
      {
        "id": "7",
        "tipo": "ADMINISTRADOR",
        "habilitado": "false",
        "email": "teste7@teste.com",
        "pessoa": {
          "id": "7",
          "nome": "Jeff"
        }
      },
      {
        "id": "8",
        "tipo": "ADMINISTRADOR",
        "habilitado": "false",
        "email": "teste8@teste.com",
        "pessoa": {
          "id": "1",
          "nome": "Marlon"
        }
      },
      {
        "id": "9",
        "tipo": "ADMINISTRADOR",
        "habilitado": "true",
        "email": "teste9@teste.com",
        "pessoa": {
          "id": "14",
          "nome": "Maria"
        }
      },
      {
        "id": "10",
        "tipo": "ADMINISTRADOR",
        "habilitado": "false",
        "email": "teste10@teste.com",
        "pessoa": {
          "id": "1",
          "nome": "Marlon"
        }
      },
      {
        "id": "11",
        "tipo": "ADMINISTRADOR",
        "habilitado": "false",
        "email": "teste11@teste.com",
        "pessoa": {
          "id": "6",
          "nome": "João"
        }
      }
    ]
  };

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(usersData),
  };
}

export const handler = commonMiddleware(getUsers);