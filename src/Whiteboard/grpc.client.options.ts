import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const getWhiteboardClientOptions = (url: string): ClientOptions => {
  return {
    transport: Transport.GRPC,
    options: {
      url,
      package: 'Whiteboard',
      protoPath: join(__dirname, './whiteboard.proto'),
    },
  };
};
