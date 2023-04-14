import { Construct } from 'constructs'
import { Metric } from 'aws-cdk-lib/aws-cloudwatch'
import * as apprunner from 'aws-cdk-lib/aws-apprunner'


export class AppRunnerMetrics {
  static requestCount(service: apprunner.CfnService) {
    return new Metric({
      namespace: 'AWS/AppRunner',
      metricName: 'Requests',
      dimensionsMap: {
        ServiceName: service.serviceName as string,
        ServiceID: service.attrServiceId
      },
    })
  }

  /** */
  static http2xxResponseCount(service: apprunner.CfnService) {
    return new Metric({
      namespace: 'AWS/AppRunner',
      metricName: '2xxStatusResponses',
      dimensionsMap: {
        ServiceName: service.serviceName as string,
        ServiceID: service.attrServiceId
      },
    })
  }

  static http4xxResponseCount(service: apprunner.CfnService) {
    return new Metric({
      namespace: 'AWS/AppRunner',
      metricName: '4xxStatusResponses',
      dimensionsMap: {
        ServiceName: service.serviceName as string,
        ServiceID: service.attrServiceId
      },
    })
  }

  static http5xxResponseCount(service: apprunner.CfnService) {
    return new Metric({
      namespace: 'AWS/AppRunner',
      metricName: '5xxStatusResponses',
      dimensionsMap: {
        ServiceName: service.serviceName as string,
        ServiceID: service.attrServiceId
      },
    })
  }

  static requestLatency(service: apprunner.CfnService) {
    return new Metric({
      namespace: 'AWS/AppRunner',
      metricName: 'RequestLatency',
      dimensionsMap: {
        ServiceName: service.serviceName as string,
        ServiceID: service.attrServiceId
      },
    })
  }

  static activeInstances(service: apprunner.CfnService) {
    return new Metric({
      namespace: 'AWS/AppRunner',
      metricName: 'ActiveInstances',
      dimensionsMap: {
        ServiceName: service.serviceName as string,
        ServiceID: service.attrServiceId
      },
    })
  }

  static cpuUtilization(service: apprunner.CfnService) {
    return new Metric({
      namespace: 'AWS/AppRunner',
      metricName: 'CPUUtilization',
      dimensionsMap: {
        ServiceName: service.serviceName as string,
        ServiceID: service.attrServiceId
      },
    })
  }

  static memoryUtilization(service: apprunner.CfnService) {
    return new Metric({
      namespace: 'AWS/AppRunner',
      metricName: 'MemoryUtilization',
      dimensionsMap: {
        ServiceName: service.serviceName as string,
        ServiceID: service.attrServiceId
      },
    })
  }

  static concurrency(service: apprunner.CfnService) {
    return new Metric({
      namespace: 'AWS/AppRunner',
      metricName: 'Concurrency',
      dimensionsMap: {
        ServiceName: service.serviceName as string,
        ServiceID: service.attrServiceId
      },
    })
  }
}