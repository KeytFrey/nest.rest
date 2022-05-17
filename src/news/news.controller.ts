import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { NewsService } from './news.service';
import { NewsDto } from './dto/news.dto';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  findAll() {
    return this.newsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsService.findById(id);
  }

  @Post()
  create(@Body() createNewsDto: NewsDto) {
    return this.newsService.create(createNewsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsService.remove(id);
  }

  @Put(':id')
  update(@Body() UpdateNewsDto: NewsDto, @Param('id') id: string) {
    return this.newsService.update(id);
  }
}
