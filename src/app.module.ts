import { Module } from '@nestjs/common';
import { BrokenControllerModule } from './broken-controller/broken-controller.module';
import { TypeormDependentModuleModule } from './typeorm-dependent-module/typeorm.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    BrokenControllerModule,
    TypeormDependentModuleModule,
    // Comment this out and the imports in typeorm-dependent-module.module.ts
    // and the broken-controller param will work again.
    TypeOrmModule,
  ],
})
export class AppModule {}
