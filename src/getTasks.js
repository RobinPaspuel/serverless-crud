const AWS = require("aws-sdk");

const getTasks = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const data = await dynamodb
    .scan({
      TableName: "TaskTable",
    })
    .promise();

  const tasks = data.Items;

  return {
    status: 200,
    body: {
      tasks,
    },
  };
};

module.exports = { getTasks };
