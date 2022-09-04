const cdk = require('@aws-cdk/core');
const lambda = require('@aws-cdk/aws-lambda')
const apiGateway = require('@aws-cdk/aws-apigateway')
const iam = require('@aws-cdk/aws-iam');
const { Duration } = require('aws-cdk-lib');

class ApiGatewayWithLambdaCdkStack extends cdk.Stack {
  /**
   * @param {cdk.App} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

  
    // @ts-ignore
    const func = new lambda.Function(this,'Lambda',{
      runtime: lambda.Runtime.NODEJS_14_X,
      code:lambda.Code.fromAsset('Resource'),
      handler:'lambdaCode.handler',
    })

    const authFunc = new lambda.Function(this,'AuthorizationFunction',{
      runtime:lambda.Runtime.NODEJS_14_X,
      code:lambda.Code.fromAsset('Resource'),
      handler:'lambdaCodeAuth.handler'
    })
   
    const auth = new apiGateway.TokenAuthorizer(this,'NewRequestAuthorizer',{
      handler:authFunc,
      identitySource:'method.request.header.AuthorizeToken'
      
    })

    const api = new apiGateway.RestApi(this,'callLambda');

    api.root
    .resourceForPath('call')
    .addMethod("GET",new apiGateway.LambdaIntegration(func),{
      authorizer:auth,
    })
    
  }
}

module.exports = { ApiGatewayWithLambdaCdkStack }
