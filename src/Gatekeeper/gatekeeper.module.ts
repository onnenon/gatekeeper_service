import { Module } from '@nestjs/common';
import { GatekeeperClientService } from './gatekeeper.service';

@Module({
  imports: [],
  providers: [GatekeeperClientService],
})
export class GatekeeperModule {}
