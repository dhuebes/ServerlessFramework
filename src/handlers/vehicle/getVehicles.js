import commonMiddleware from "../../../lib/commonMiddleware";

async function getVehicles(event, context) {

    let vehiclesData = {
        data: [
            {
                "id": "1",
                "tipo": "CARRO",
                "modelo": "Gol",
                "marca": "Volkswagem",
                "placa": "MKT2090",
                "responsavel": {
                    "id": "2",
                    "nome": "Pedro"
                }
            },
            {
                "id": "2",
                "tipo": "MOTO",
                "modelo": "NC 750 X",
                "marca": "Honda",
                "placa": "MKT2090",
                "responsavel": {
                    "id": "1",
                    "nome": "Marlon"
                }
            },
            {
                "id": "3",
                "tipo": "CARRO",
                "modelo": "Saveiro",
                "marca": "Volkswagem",
                "placa": "MKT4123",
                "responsavel": {
                    "id": "1",
                    "nome": "Marlon"
                }
            },
            {
                "id": "4",
                "tipo": "CARRO",
                "modelo": "Elantra",
                "marca": "Hyundai",
                "placa": "ASD2090",
                "responsavel": {
                    "id": "3",
                    "nome": "Luciana"
                }
            },
            {
                "id": "5",
                "tipo": "CARRO",
                "modelo": "Gol",
                "marca": "Volkswagem",
                "placa": "MKT2090",
                "responsavel": {
                    "id": "1",
                    "nome": "Marlon"
                }
            },
            {
                "id": "6",
                "tipo": "MOTO",
                "modelo": "MT-09",
                "marca": "Yamaha",
                "placa": "QHI4756",
                "responsavel": {
                    "id": "10",
                    "nome": "Denis"
                }
            },
            {
                "id": "7",
                "tipo": "CARRO",
                "modelo": "Evoque",
                "marca": "Land Rover",
                "placa": "MKT2090",
                "responsavel": {
                    "id": "7",
                    "nome": "Jeff"
                }
            },
            {
                "id": "8",
                "tipo": "CARRO",
                "modelo": "Gol",
                "marca": "Volkswagem",
                "placa": "MKT2090",
                "responsavel": {
                    "id": "1",
                    "nome": "Marlon"
                }
            },
            {
                "id": "9",
                "tipo": "CARRO",
                "modelo": "Astra",
                "marca": "Chevrolet",
                "placa": "QWE7894",
                "responsavel": {
                    "id": "14",
                    "nome": "Maria"
                }
            },
            {
                "id": "10",
                "tipo": "CARRO",
                "modelo": "Gol",
                "marca": "Volkswagem",
                "placa": "MKT2090",
                "responsavel": {
                    "id": "1",
                    "nome": "Marlon"
                }
            },
            {
                "id": "11",
                "tipo": "CARRO",
                "modelo": "350Z",
                "marca": "Nissan",
                "placa": "MKT2090",
                "responsavel": {
                    "id": "6",
                    "nome": "João"
                }
            }
        ]
    };

    return {
      statusCode: 200,
      body: JSON.stringify(vehiclesData),
    };
}
  
export const handler = commonMiddleware(getVehicles);