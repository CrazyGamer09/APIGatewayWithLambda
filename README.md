# Welcome to your CDK JavaScript project / API gateway with lambda

You should explore the contents of this project. It demonstrates a CDK app with an instance of a stack (`ApiGatewayWithLambdaCdkStack`)
which contains an Amazon SQS queue that is subscribed to an Amazon SNS topic.

The `cdk.json` file tells the CDK Toolkit how to execute your app. The build step is not required when using JavaScript.

## Useful commands

* `npm run test`         perform the jest unit tests
* `cdk deploy`           deploy this stack to your default AWS account/region
* `cdk diff`             compare deployed stack with current state
* `cdk synth`            emits the synthesized CloudFormation template

* `npm i @aws-cdk/aws-apigateway`
* `npm i @aws-cdk/aws-iam`
* `npm i @aws-cdk/aws-lambda`
