import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SenderController } from './controllers/sender/sender.controller';
import { ReceiverController } from './controllers/receiver/receiver.controller';

@Module({
  imports: [],
  controllers: [AppController, SenderController, ReceiverController],
  providers: [AppService],
})
export class AppModule {}
