import { OnModuleInit, Injectable, Logger, Get } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { grpcClientOptions } from 'src/grpc.client.options';
import {
  BoardUpdate,
  GatekeeperService,
  BoardUpdateResponse,
} from './gatekeeper.interfaces';

export class GatekeeperClientService implements OnModuleInit {
  @Client(grpcClientOptions)
  private readonly client: ClientGrpc;

  private gatekeeperService: GatekeeperService;

  onModuleInit() {
    this.gatekeeperService = this.client.getService<GatekeeperService>(
      'GatekeeperService',
    );
  }

  async updateBoard(updates: BoardUpdate[]): Promise<BoardUpdateResponse> {
    return this.gatekeeperService.updateBoard({ updates }).toPromise();
  }
}
