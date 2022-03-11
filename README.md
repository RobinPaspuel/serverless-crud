# Serverless Framework Technology Test

This is a simple CRUD taks application to test the functionalities of the Serverless Framework and DynamoDB on AWS. The app allows to create, get, get by id, update and delete taks. It also implements a simple middleware (to parse the event body).

## Technology Stack
 - Serverless Framework
 - NodeJS
 - DynamoDB
 - Middy

## Instructions

To deploy correctly the functions to AWS please create a DynamoDB Resource and add a .env file with the link of the resource.

 - DATABASE_RESOURCE

The serverless.yml provides the means to create the resource automatically. By commenting the provider section and running:

```bash
sls deploy --verbose
```
> --verbose offers extra logs for information

**It is important that for this to work we previously have configured the IAM AWS service correctly**

After that by running the command again we will have endpoints ready.

