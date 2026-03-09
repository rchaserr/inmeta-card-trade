import type { Id } from '../common';
import type { Card } from './card/card';

enum TradeCardType {
  RECEIVING = 'RECEIVING',
  OFFERING = 'OFFERING',
}

export interface Trade extends Id {
  createdAt: string;
  tradeCards: TradeCard[];
  user: {
    name: string;
  };
  userId: string;
}

export interface TradeCard extends Id {
  card: Card;
  cardId: string;
  tradeId: string;
  type: TradeCardType;
}
