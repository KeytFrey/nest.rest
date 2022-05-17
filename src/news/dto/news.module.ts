import { Module } from '@nestjs/common';
import { NewsController } from '../news.controller';
import { NewsService } from './news.service';

@Module({
  providers: [NewsService],
  controllers: [NewsController],
})
export class NewsModule {}
