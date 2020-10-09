import { APIGatewayEvent } from "aws-lambda";
import { HttpResponse } from "../types";

export const handler = async (
  event: APIGatewayEvent
): Promise<HttpResponse> => {
  const paramNumber = event.queryStringParameters?.number;
  const value = parseInt(paramNumber);

  if ((!value && value !== 0) || isNaN(value)) {
    return {
      statusCode: 200,
      body: "Should provide a number.",
    };
  }

  const doubledValue = value * 2;

  return {
    statusCode: 200,
    body: doubledValue,
  };
};
