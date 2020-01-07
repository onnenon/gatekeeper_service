import { Controller, Get, Post } from '@nestjs/common';
import { GatekeeperClientService } from './Gatekeeper/gatekeeper.service';

@Controller()
export class AppController {
  constructor(
    private readonly gatekeeperClientService: GatekeeperClientService,
  ) {}

  @Get()
  getHello(): string {
    const updates: Gatekeeper.BoardUpdate[] = [
      { position: 1, status: Gatekeeper.BoardStatusEnum.ERROR },
    ];

    this.gatekeeperClientService.updateBoard(updates);

    return 'Board Updated';
  }
}
