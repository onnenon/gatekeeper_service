import { OnModuleInit, Injectable } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { grpcClientOptions } from 'src/grpc.client.options';
import { BoardUpdate, GatekeeperService } from './gatekeeper.interfaces';

@Injectable()
export class GatekeeperClientService implements OnModuleInit {
  @Client(grpcClientOptions)
  private readonly client: ClientGrpc;

  private gatekeeperService: GatekeeperService;

  onModuleInit() {
    this.gatekeeperService = this.client.getService<GatekeeperService>(
      'GatekeeperService',
    );
  }

  updateBoard(updates: BoardUpdate[]) {
    return this.gatekeeperService.updateBoard({ updates });
  }
}
