import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GatekeeperClientService } from './gatekeeper/gatekeeper.service';

@Module({
  providers: [GatekeeperClientService],
  controllers: [AppController],
})
export class AppModule {}
