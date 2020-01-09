import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { WhiteboardClient } from './whiteboard/whiteboard.service';

@Module({
  providers: [WhiteboardClient],
  controllers: [AppController],
})
export class AppModule {}
