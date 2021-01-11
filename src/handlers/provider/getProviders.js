import commonMiddleware from "../../../lib/commonMiddleware";

async function getProviders(event, context) {

    return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify({ message: 'getProviders called' }),
    };
}

export const handler = commonMiddleware(getProviders);