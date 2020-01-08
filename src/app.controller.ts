import { Controller, Get, Post } from '@nestjs/common';
import { WhiteboardClient } from './Whiteboard/whiteboard.service';
import {
  BoardUpdate,
  BoardStatusEnum,
} from './Whiteboard/whiteboard.interfaces';

@Controller()
export class AppController {
  constructor(private readonly whiteboard: WhiteboardClient) {}

  @Post()
  async getBoardPositions(): Promise<string> {
    const updates: BoardUpdate[] = [
      { position: 1, status: BoardStatusEnum.ERROR },
    ];

    const response = await this.whiteboard.updateBoard(updates);

    return `Board update success: ${response.requestStatus}`;
  }
}
