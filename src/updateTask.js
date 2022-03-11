const AWS = require("aws-sdk");

const updateTask = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { id } = event.pathParameters;
  const { title, description, done } = JSON.parse(event.body);

  await dynamodb
    .update({
      TableName: "TaskTable",
      Key: { id },
      UpdateExpression:"set done = :done, title = :title, description = :description",
      ExpressionAttributeValues: {
        ":title": title,
        ":description": description,
        ":done": done,
      },
      ReturnValues: "ALL_NEW",
    })
    .promise();

  return {
    status: 200,
    body: JSON.stringify({ message: "Task updated successfully" }),
  };
};

module.exports = { updateTask };
