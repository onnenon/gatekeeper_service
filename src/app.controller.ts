import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { WhiteboardClient } from './Whiteboard/whiteboard.service';
import { Response } from 'express';
import { BoardUpdateRequest } from './Whiteboard/whiteboard.interfaces';

@Controller()
export class AppController {
  constructor(private readonly whiteboard: WhiteboardClient) {}

  @Post()
  async updateBoardPositions(
    @Res() res: Response,
    @Body() updateDto: BoardUpdateRequest,
  ): Promise<Response> {
    await this.whiteboard.updateBoard(updateDto.updates);
    return res
      .status(HttpStatus.OK)
      .send(JSON.parse('{"success": "updated successfully"}'));
  }
}
