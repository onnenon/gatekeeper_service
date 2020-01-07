import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { grpcServerOptions } from './grpc.client.options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(grpcServerOptions);

  await app.startAllMicroservicesAsync();
  await app.listen(3000);
}
bootstrap();
