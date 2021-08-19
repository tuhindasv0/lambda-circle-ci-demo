import type { AWS } from '@serverless/typescript';

import hello from '@functions/hello';

const serverlessConfiguration: AWS = {
  service: 'lambda-circle-ci-demo',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: ['serverless-webpack','serverless-import-apigateway'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      restApiId: 'uh9mvvfoa9', 
      restApiRootResourceId: '5tnipt' },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: { hello },
};

module.exports = serverlessConfiguration;
