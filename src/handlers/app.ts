import type { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

export async function handle(event: APIGatewayProxyEvent, ctx: Context): Promise<APIGatewayProxyResult> {
  return {
    statusCode: 200,
    body: JSON.stringify({})
  };
}