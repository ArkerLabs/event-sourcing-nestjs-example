import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetUserByIdQuery, GetUserByEmailQuery } from '../impl';
import { Redisk } from 'redisk';
import { User } from 'src/users/entities/user.entity';

@QueryHandler(GetUserByEmailQuery)
export class GetUserByEmailHandler implements IQueryHandler<GetUserByEmailQuery> {
  constructor(private readonly redisk: Redisk) {}

  async execute(query: GetUserByEmailQuery) {
    return await this.redisk.getOne<User>(User, query.email, 'email');
  }
}
