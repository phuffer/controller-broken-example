import { Module } from '@nestjs/common';
import { BrokenControllerController } from './broken-controller.controller';

@Module({
  controllers: [BrokenControllerController],
})
export class BrokenControllerModule {}
