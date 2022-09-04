#!/usr/bin/env node
const cdk = require('@aws-cdk/core');
const { ApiGatewayWithLambdaCdkStack } = require('../lib/api_gateway_with_lambda_cdk-stack');

const app = new cdk.App();
new ApiGatewayWithLambdaCdkStack(app, 'ApiGatewayWithLambdaCdkStack');
