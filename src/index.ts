import { Construct } from 'constructs'
import { Metric, CommonMetricOptions } from 'aws-cdk-lib/aws-cloudwatch'
import * as logs from 'aws-cdk-lib/aws-logs'
import * as apprunner from 'aws-cdk-lib/aws-apprunner'

type MetricOptions = Pick<CommonMetricOptions,
  | 'period'
  | 'statistic'
  | 'unit'
  | 'label'
  | 'color'
> 

export class AppRunnerMetrics {
  /**
   * The Request Count metric for the App Runner service.
   * @param service - The App Runner service to get the metric for.
   * @param options - Extra options to pass to the metric.
   * @returns The Request Count metric for the App Runner service.
   * @see https://docs.aws.amazon.com/apprunner/latest/dg/monitor-cw.html
   */
  static requestCount(service: apprunner.CfnService, options: MetricOptions = {}) {
    return new Metric({
      ...options,
      namespace: 'AWS/AppRunner',
      metricName: 'Requests',
      dimensionsMap: {
        ServiceName: service.serviceName as string,
        ServiceID: service.attrServiceId
      },
    })
  }

  /**
   * The HTTP 2xx Response Count metric for the App Runner service.
   * @param service - The App Runner service to get the metric for.
   * @param options - Extra options to pass to the metric.
   * @returns The HTTP 2xx Response Count metric for the App Runner service.
   * @see https://docs.aws.amazon.com/apprunner/latest/dg/monitor-cw.html
   */
  static http2xxResponseCount(service: apprunner.CfnService, options: MetricOptions = {}) {
    return new Metric({
      ...options,
      namespace: 'AWS/AppRunner',
      metricName: '2xxStatusResponses',
      dimensionsMap: {
        ServiceName: service.serviceName as string,
        ServiceID: service.attrServiceId
      },
    })
  }

  /**
   * The HTTP 4xx Response Count metric for the App Runner service.
   * @param service - The App Runner service to get the metric for.
   * @param options - Extra options to pass to the metric.
   * @returns The HTTP 4xx Response Count metric for the App Runner service.
   * @see https://docs.aws.amazon.com/apprunner/latest/dg/monitor-cw.html
   */
  static http4xxResponseCount(service: apprunner.CfnService, options: MetricOptions = {}) {
    return new Metric({
      ...options,
      namespace: 'AWS/AppRunner',
      metricName: '4xxStatusResponses',
      dimensionsMap: {
        ServiceName: service.serviceName as string,
        ServiceID: service.attrServiceId
      },
    })
  }

  /**
   * The HTTP 5xx Response Count metric for the App Runner service.
   * @param service - The App Runner service to get the metric for.
   * @param options - Extra options to pass to the metric.
   * @returns The HTTP 5xx Response Count metric for the App Runner service.
   * @see https://docs.aws.amazon.com/apprunner/latest/dg/monitor-cw.html
   */
  static http5xxResponseCount(service: apprunner.CfnService, options: MetricOptions = {}) {
    return new Metric({
      ...options,
      namespace: 'AWS/AppRunner',
      metricName: '5xxStatusResponses',
      dimensionsMap: {
        ServiceName: service.serviceName as string,
        ServiceID: service.attrServiceId
      },
    })
  }

  /**
   * The Request Latency metric for the App Runner service.
   * @param service - The App Runner service to get the metric for.
   * @param options - Extra options to pass to the metric.
   * @returns The Request Latency metric for the App Runner service.
   * @see https://docs.aws.amazon.com/apprunner/latest/dg/monitor-cw.html
   */ 
  static requestLatency(service: apprunner.CfnService, options: MetricOptions = {}) {
    return new Metric({
      ...options,
      namespace: 'AWS/AppRunner',
      metricName: 'RequestLatency',
      dimensionsMap: {
        ServiceName: service.serviceName as string,
        ServiceID: service.attrServiceId
      },
    })
  }

  /**
   * The Active Instances metric for the App Runner service.
   * @param service - The App Runner service to get the metric for.
   * @param options - Extra options to pass to the metric.
   * @returns The Active Instances metric for the App Runner service.
   * @see https://docs.aws.amazon.com/apprunner/latest/dg/monitor-cw.html
   */ 
  static activeInstances(service: apprunner.CfnService, options: MetricOptions = {}) {
    return new Metric({
      ...options,
      namespace: 'AWS/AppRunner',
      metricName: 'ActiveInstances',
      dimensionsMap: {
        ServiceName: service.serviceName as string,
        ServiceID: service.attrServiceId
      },
    })
  }

  /**
   * The CPU Utilization metric for the App Runner service.
   * @param service - The App Runner service to get the metric for.
   * @param options - Extra options to pass to the metric.
   * @returns The CPU Utilization metric for the App Runner service.
   * @see https://docs.aws.amazon.com/apprunner/latest/dg/monitor-cw.html
   */
  static cpuUtilization(service: apprunner.CfnService, options: MetricOptions = {}) {
    return new Metric({
      ...options,
      namespace: 'AWS/AppRunner',
      metricName: 'CPUUtilization',
      dimensionsMap: {
        ServiceName: service.serviceName as string,
        ServiceID: service.attrServiceId
      },
    })
  }

  /**
   * The Memory Utilization metric for the App Runner service.
   * @param service - The App Runner service to get the metric for.
   * @param options - Extra options to pass to the metric.
   * @returns The Memory Utilization metric for the App Runner service.
   * @see https://docs.aws.amazon.com/apprunner/latest/dg/monitor-cw.html
   */
  static memoryUtilization(service: apprunner.CfnService, options: MetricOptions = {}) {
    return new Metric({
      ...options,
      namespace: 'AWS/AppRunner',
      metricName: 'MemoryUtilization',
      dimensionsMap: {
        ServiceName: service.serviceName as string,
        ServiceID: service.attrServiceId
      },
    })
  }

  /**
   * The The approximate number of concurrent requests being handled by the service metric for the App Runner service.
   * @param service - The App Runner service to get the metric for.
   * @param options - Extra options to pass to the metric.`
   * @returns The The approximate number of concurrent requests being handled by the service metric for the App Runner service.
   * @see https://docs.aws.amazon.com/apprunner/latest/dg/monitor-cw.html
   */
  static concurrency(service: apprunner.CfnService, options: MetricOptions = {}) {
    return new Metric({
      ...options,
      namespace: 'AWS/AppRunner',
      metricName: 'Concurrency',
      dimensionsMap: {
        ServiceName: service.serviceName as string,
        ServiceID: service.attrServiceId
      },
    })
  }

  /**
   * The service log group for the App Runner service (Event Logs + Deployment Logs).
   * @param scope - The scope of the construct.
   * @param id - Logical ID of this resource.
   * @param service - The App Runner service to get the log for. 
   * @returns The service log group for the App Runner service.
   */
  static serviceLogGroup(scope: Construct, id: string, service: apprunner.CfnService) {
    return logs.LogGroup.fromLogGroupName(scope, id, `/aws/apprunner/${service.serviceName}/${service.attrServiceId}/service`)
  }

  /**
   * The application log group for the App Runner service (Running Instances).
   * @param scope - The scope of the construct.
   * @param id - Logical ID of this resource.
   * @param service - The App Runner service to get the log for. 
   * @returns The application log group for the App Runner service.
   */
  static applicationLogGroup(scope: Construct, id: string, service: apprunner.CfnService) {
    return logs.LogGroup.fromLogGroupName(scope, id, `/aws/apprunner/${service.serviceName}/${service.attrServiceId}/application`)
  }
}