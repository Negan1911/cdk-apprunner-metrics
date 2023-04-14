# AWS App Runner Metrics

This AWS CDK construct export the default metrics created by the App Runner Service, you can use them to create dashboards or alarms.

Requirements
To use this construct, you'll need the following:

- An AWS account with the necessary permissions to create AWS AppRunner and AWS CloudFormation resources.
- AWS CDK v2 installed and configured on your development machine.
- Node.js and TypeScript installed on your development machine.

## Getting Started

To get started with this library, follow these steps:

1. Install the library in your AWS CDK project by running the following command:

```bash
npm install cdk-apprunner-metrics
```

or, with yarn:

```bash
yarn add cdk-apprunner-metrics
```

2. Import it in your CDK stack:

```ts
import { AppRunnerMetrics } from "cdk-apprunner-metrics";
```

3. Instantiate the AppRunnerAutoscaling construct in your AWS CDK stack and provide the required parameters:

```ts
const service = new apprunner.CfnService(this, "AppRunnerService", {
  serviceName: id,
  /** Other config... **/
});
```

4. Once do that, get the metric you desire by doing (here we list all examples):

```ts
const http2xxCountMetric = AppRunnerMetrics.http2xxResponseCount(service);
const http4xxCountMetric = AppRunnerMetrics.http4xxResponseCount(service);
const http5xxCountMetric = AppRunnerMetrics.http5xxResponseCount(service);
const requestLatencyMetric = AppRunnerMetrics.requestLatency(service);
const activeInstancesMetric = AppRunnerMetrics.activeInstances(service);
const cpuUtilizationMetric = AppRunnerMetrics.cpuUtilization(service);
const memoryUtilizationMetric = AppRunnerMetrics.memoryUtilization(service);
const concurrencyMetric = AppRunnerMetrics.concurrency(service);
```

5. You can use your metrics on whatever place you like.
