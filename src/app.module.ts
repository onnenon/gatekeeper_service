import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GatekeeperModule } from './Gatekeeper/gatekeeper.module';

@Module({
  imports: [GatekeeperModule],
  controllers: [AppController],
})
export class AppModule {}
