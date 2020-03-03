import { Body, Controller, Get, Param, Post, UseGuards, Req } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { GqlAuthGuard } from 'src/graphql/guards/gql-auth.guard';
import { AuthService } from 'src/graphql/services/auth.service';
import { LoginCommand } from './commands/impl/login.command';
import { LoginDto } from './dtos/login.dto';
import { AuthGuard } from '@nestjs/passport';
import { RestAuthGuard } from 'src/graphql/guards/rest-auth.guard';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly commandBus: CommandBus,
    private readonly authService: AuthService,
  ) {}

  @Post()
  async create(@Body() dto: LoginDto): Promise<void> {
    return this.commandBus.execute(new LoginCommand(dto.email));
  }

  @Get()
  @UseGuards(RestAuthGuard)
  me(@Req() req): string {
    return this.authService.getLoggedUser(req).userId;
  }
}
