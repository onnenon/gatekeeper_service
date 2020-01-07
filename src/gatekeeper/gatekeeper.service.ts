import { OnModuleInit, Injectable } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { grpcClientOptions } from 'src/grpc.client.options';
import { Gatekeeper } from './types';

@Injectable()
export class GatekeeperService implements OnModuleInit {
  @Client(grpcClientOptions)
  private readonly client: ClientGrpc;

  private gatekeeperService: Gatekeeper.GatekeeperService;

  onModuleInit() {
    this.gatekeeperService = this.client.getService<
      Gatekeeper.GatekeeperService
    >('GatekeeperService');
  }

  updateBoard(updates: Gatekeeper.BoardUpdate[]) {
    return this.gatekeeperService.updateBoard({ updates });
  }
}
