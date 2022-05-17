import { Injectable } from '@nestjs/common';
import { INewsItemDto } from './create-news.dto';

@Injectable()
export class NewsService {
  findOne(uuid: string) {
    throw new Error('Method not implemented.');
  }
  private newsList: INewsItemDto[] = [];

  findAll() {
    return this.newsList;
  }

  findById(id: string) {
    return this.newsList.find((p) => p.id === id);
  }

  create(NewsDto: INewsItemDto) {
    return this.newsList.push({
      id: Date.now().toString(),
      ...NewsDto,
    });
  }

  remove(id: string) {
    throw new Error('Method not implemented.');
  }
  update(id: string) {
    throw new Error('Method not implemented.');
  }
}
