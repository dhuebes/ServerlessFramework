import commonMiddleware from "../../../lib/commonMiddleware";

async function getVehicleById(event, context) {

    let vehicleData = {
        data: {
            "id": "1",
            "tipo": "CARRO",
            "modelo": "Gol",
            "marca": "Volkswagem",
            "placa": "MKT2090",
            "responsavel": {
                "id": "2",
                "nome": "Pedro"
            }
        }        
    };

    return {
        statusCode: 200,
        body: JSON.stringify(vehicleData),
    };
}

export const handler = commonMiddleware(getVehicleById);