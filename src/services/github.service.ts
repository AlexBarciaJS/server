import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {GithubDataSource} from '../datasources';

export interface Github {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  getUsers(name: string): Promise<User>;
}

export class GithubProvider implements Provider<Github> {
  constructor(
    // github must match the name property in the datasource json file
    @inject('datasources.github')
    protected dataSource: GithubDataSource = new GithubDataSource(),
  ) {}

  value(): Promise<Github> {
    return getService(this.dataSource);
  }
}

export interface User {
  name: string;
}
