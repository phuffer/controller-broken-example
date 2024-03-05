import { Controller, Get, Param } from '@nestjs/common';

@Controller('broken-controller')
export class BrokenControllerController {
  @Get(':test')
  testMethod(@Param('test') test: string) {
    console.log(test);
    return test;
  }
}
