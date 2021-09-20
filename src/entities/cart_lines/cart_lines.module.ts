import { CartLinesController } from './cart_lines.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CartLinesEntity } from './cart_lines.entity';
import { CartLinesService } from './cart_lines.service';

@Module({
  imports: [TypeOrmModule.forFeature([CartLinesEntity])],
  providers: [CartLinesService],
  controllers: [CartLinesController],
  exports: [CartLinesService],
})
export class CartLinesModule {}
