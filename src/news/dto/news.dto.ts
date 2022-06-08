import { IsOptional, IsString, IsUUID } from 'class-validator';

export class NewsDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsUUID(4)
  ownerId: string;
}
