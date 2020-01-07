import { Module } from '@nestjs/common';
import { GatekeeperService } from './gatekeeper.service';

@Module({
  imports: [],
  providers: [GatekeeperService],
})
export class GatekeeperModule {}
