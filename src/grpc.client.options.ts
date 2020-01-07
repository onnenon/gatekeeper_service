import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'localhost:8990',
    package: 'gatekeeper',
    protoPath: join(__dirname, './gatekeeper/gatekeeper.proto'),
  },
};
