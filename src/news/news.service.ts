import { Injectable } from '@nestjs/common';
import { INewsItemDto } from './interfaces/newsItems';

@Injectable()
export class NewsService {
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

  remove(id) {
    return this.newsList.splice(id, 1);
  }
  update(id: string) {
    throw new Error('Method not implemented.');
  }
}
