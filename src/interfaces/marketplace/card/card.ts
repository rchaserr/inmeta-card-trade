import type { Id, Name } from '@/interfaces/common';

export interface Card extends Id, Name {
  createdAt: string;
  description: string;
  imageUrl: string;
}
