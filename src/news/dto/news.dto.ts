import { IsString } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';

export class NewsDto {
  @IsString()
  title: string;
  description?: string;

  @uuidv4()
  ownerId: string;
}
