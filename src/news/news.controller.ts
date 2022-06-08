import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
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
    const newsItem = this.newsService.findById(id);
    if (newsItem === null) {
      throw new HttpException(
        'Новость с таким ID не найдена',
        HttpStatus.NOT_FOUND,
      );
    } else {
      return newsItem;
    }
  }

  @Post()
  create(@Body() createNewsDto: NewsDto) {
    return this.newsService.create(createNewsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const newsItemDel = this.newsService.delete(id);
    if (newsItemDel === null) {
      throw new HttpException('Нет такой новости', HttpStatus.NOT_FOUND);
    } else {
      return newsItemDel;
    }
  }

  @Put(':id')
  update(@Body() body: NewsDto, @Param('id') id: string) {
    const newsItemUp = this.newsService.update(id, body);
    if (newsItemUp === null) {
      throw new HttpException('Нет такой новости', HttpStatus.NOT_FOUND);
    } else {
      return newsItemUp;
    }
  }
}
