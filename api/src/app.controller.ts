import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('addName')
  async addName(@Body('name') name: string) {
    return this.appService.addName(name);
  }

  @Get('getNames')
  async getNames() {
    return this.appService.getNames();
  }
}
