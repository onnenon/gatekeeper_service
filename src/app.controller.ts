import { Controller, Get, Post } from '@nestjs/common';
import { GatekeeperClientService } from './gatekeeper/gatekeeper.service';
import {
  BoardUpdate,
  BoardStatusEnum,
} from './gatekeeper/gatekeeper.interfaces';

@Controller()
export class AppController {
  constructor(
    private readonly gatekeeperClientService: GatekeeperClientService,
  ) {}

  @Get()
  getHello(): string {
    const updates: BoardUpdate[] = [
      { position: 1, status: BoardStatusEnum.ERROR },
    ];

    const response = this.gatekeeperClientService.updateBoard(updates);

    return `Board update success: ${response}`;
  }
}
