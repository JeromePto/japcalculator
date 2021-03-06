exports.handler = async function(event, context) {
  const requestBody = JSON.parse(event.body);
  const message = requestBody.message;
  if (message) {
    return {
      statusCode: 200,
      body: JSON.stringify({message: message}),
    };
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify({message: "Pas de message"}),
    };
  }
};
