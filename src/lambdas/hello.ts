import { APIGatewayEvent } from "aws-lambda";
import { HttpResponse } from "../types";

export const handler = async (
  event: APIGatewayEvent
): Promise<HttpResponse> => {
  return {
    statusCode: 200,
    body: "Hello 👋",
  };
};
