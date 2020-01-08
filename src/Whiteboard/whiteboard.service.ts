import { OnModuleInit, Injectable, Logger, Get } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { getWhiteboardClientOptions } from 'src/Whiteboard/grpc.client.options';
import {
  BoardUpdate,
  WhiteboardService,
  BoardUpdateResponse,
} from './whiteboard.interfaces';

export class WhiteboardClient implements OnModuleInit {
  @Client(getWhiteboardClientOptions('localhost:8990'))
  private readonly client: ClientGrpc;

  private service: WhiteboardService;

  onModuleInit() {
    this.service = this.client.getService<WhiteboardService>(
      'WhiteboardService',
    );
  }

  async updateBoard(updates: BoardUpdate[]): Promise<BoardUpdateResponse> {
    return this.service.updateBoard({ updates }).toPromise();
  }
}
