import { Injectable, Post } from '@nestjs/common';
import { INewsItem } from './interfaces/newsItems';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class NewsService {
  private newsList: INewsItem[] = [];

  findAll() {
    return this.newsList;
  }

  findById(id: string): INewsItem | null {
    return this.newsList.find((p) => p.id === id) || null;
  }

  create(date: INewsItem) {
    return this.newsList.push({
      id: uuidv4(),
      ...date,
    });
  }

  delete(id: string): void | null {
    const index = this.newsList.findIndex((news) => {
      return news.id === id;
    });
    if (index == -1) {
      return null;
    } else {
      this.newsList.splice(index, 1);
    }
  }
  update(id: string, data: INewsItem): INewsItem | null {
    const news = this.findById(id);
    if (news !== null) {
      news.title = data.title;
      news.description = data.description;
      return news;
    } else {
      return null;
    }
  }
}
