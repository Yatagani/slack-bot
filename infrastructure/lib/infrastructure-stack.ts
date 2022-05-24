import { Stack, StackProps, Duration } from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigatewayv2';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { CfnDisk } from 'aws-cdk-lib/aws-lightsail';
import { Construct } from 'constructs';
import * as path from 'path';

export class InfrastructureStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);


    // const queue = new sqs.Queue(this, 'InfrastructureQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const lambdaFunction = new lambda.Function(this, 'lambda-function', {
      runtime: lambda.Runtime.NODEJS_14_X,
      memorySize: 1024,
      timeout: Duration.seconds(5),
      handler: 'index.main',  // handler: fileName.functionName
      code: lambda.Code.fromAsset(path.join(__dirname, '/../handlers/webhook_lambda')),
    })
  }
}
