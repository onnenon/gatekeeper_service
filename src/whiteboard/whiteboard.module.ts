import { Module } from '@nestjs/common';
import { WhiteboardClient } from './whiteboard.service';

@Module({
  imports: [],
  providers: [WhiteboardClient],
})
export class WhiteboardModule {}
