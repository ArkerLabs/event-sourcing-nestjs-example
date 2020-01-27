import { GetUserByIdHandler } from './get-user-by-id.handler';
import { GetUserByEmailHandler } from './get-user-by-email.handler';
import { GetUsersHandler } from './get-users.handler';

export const QueryHandlers = [GetUserByIdHandler, GetUserByEmailHandler, GetUsersHandler];
