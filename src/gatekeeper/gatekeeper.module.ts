import { Module } from '@nestjs/common';
import { GatekeeperClientService } from './gatekeeper.service';

@Module({
  providers: [GatekeeperClientService],
})
export class GatekeeperModule {}
