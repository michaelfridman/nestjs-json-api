import { Module, Logger } from '@nestjs/common';
import { JsonApiModule } from 'json-api-nestjs';
import { Addresses, Comments, Roles, Users } from 'database';

import {
  ExampleController
} from './controllers/example.controller';
import {
  ExampleService
} from './services/example.service';

@Module({
  imports: [
    JsonApiModule.forRoot({
      globalPrefix: 'api',
      swagger: {
        apiHost: 'http://localhost:3000',
        version: '3.1.0',
        prefix: 'swagger'
      },
      providers: [
        ExampleService,
        Logger
      ],
      controllers: [
        ExampleController
      ],
      entities: [
        Comments,
        Addresses,
        Roles,
        Users
      ]
    })
  ],
})
export class ResourcesModule {}
