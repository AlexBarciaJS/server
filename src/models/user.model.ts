import {Entity, model, property} from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  login: string;

  @property({
    type: 'string',
  })
  avatar_url?: string;

  @property({
    type: 'string',
  })
  html_url?: string;

  @property({
    type: 'string',
  })
  repos_url?: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;


  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
