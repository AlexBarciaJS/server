import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'github',
  connector: 'rest',
  baseURL: 'http://api.github.com/',
  crud: false,
  options: {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36",
    },
  },
  operations: [
    {
      template: {
        method: 'GET',
        url: 'http://api.github.com/search/users?q={name}+in:user',
      },
      functions: {
        getUsers: ['name'],
      },
    },
  ],
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class GithubDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'github';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.github', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
