import {inject} from '@loopback/core';
import {get, param} from '@loopback/rest';
import {Github, User} from '../services';

// Uncomment these imports to begin using these cool features!



export class GithubUserController {
  constructor(
    @inject('services.Github')
    protected githubService: Github,
  ) {}

  @get('/github/users/{name}')
  async getGitHubUsers(
    @param.path.string('name') name: string,
  ): Promise<User> {
    console.log(this.githubService)
    return await this.githubService.getUsers(name);
  }
}
