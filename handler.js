exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: "Hello 👋",
  };
};

exports.double = async (event) => {
  if (!event || (event && !event.queryStringParameters)) {
    return {
      statusCode: 200,
      body: "Should provide a number.",
    };
  }
  const doubledValue = event.queryStringParameters * 2;

  return {
    statusCode: 200,
    body: doubledValue,
  };
};
