const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  const { httpMethod, body, queryStringParameters, path } = event;

  try {
    // Example: Use a query param to choose the target endpoint
    const endpoint = queryStringParameters.endpoint;

    let url = "";
    let options = {
      method: httpMethod,
      headers: {
        "Content-Type": "application/json",
        "Client-ID": "o8hd89dcqn6tvksmnse3kzec2we213",
        Authorization: "Bearer c3pvgi1kdoqhlmtns82eie77vqcr0w",
        // add Authorization or API Key here if needed
      },
    };

    if (httpMethod === "POST") {
      options.body = body;
    }

    if (endpoint === "first") {
      url = "https://api.igdb.com/v4/multiquery";
    } else if (endpoint === "second") {
      url = "https://api.igdb.com/v4/games";
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Unknown endpoint type" }),
      };
    }

    const response = await fetch(url, options);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
