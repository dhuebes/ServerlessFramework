import commonMiddleware from "../../../lib/commonMiddleware";

async function getProviderById(event, context) {
  const { id } = event.pathParameters;

    return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify({ message: 'getProviderById called' }),
    };
}

export const handler = commonMiddleware(getProviderById);