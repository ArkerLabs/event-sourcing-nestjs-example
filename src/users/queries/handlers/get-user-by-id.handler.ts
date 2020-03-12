import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetUserByIdQuery } from '../impl';
import { Redisk } from 'redisk';
import { User } from 'src/users/entities/user.entity';

@QueryHandler(GetUserByIdQuery)
export class GetUserByIdHandler implements IQueryHandler<GetUserByIdQuery> {
  constructor(private readonly redisk: Redisk) {}

  async execute(query: GetUserByIdQuery) {
    return await this.redisk.getOne<User>(User, query.id);
  }
}
