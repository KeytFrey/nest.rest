import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { INewsItemDto } from './dto/create-news.dto';

import { NewsService } from './dto/news.service';
import { INewsDto } from './dto/news.dto';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  findAll() {
    return this.newsService.findAll();
  }

  @Get(':id')
  GitOne(@Param('id') id: string) {
    return this.newsService.findById(id);
  }

  @Post()
  create(@Body() createNewsDto: INewsItemDto) {
    return this.newsService.create(createNewsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsService.remove(id);
  }

  @Put(':id')
  update(@Body() UpdateNewsDto: INewsDto, @Param('id') id: string) {
    return this.newsService.update(id);
  }
}
