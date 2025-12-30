import { Injectable } from '@nestjs/common';

export interface Order {
  id: number;
  userId: string;
  items: any[];
  total: number;
  status: string;
  createdAt: Date;
}

@Injectable()
export class OrdersService {
  private orders: Order[] = [];

  create(userId: string, items: any[], total: number): Order {
    const newOrder: Order = {
      id: Date.now(),
      userId,
      items,
      total,
      status: 'pending',
      createdAt: new Date(),
    };
    this.orders.push(newOrder);
    return newOrder;
  }

  findByUser(userId: string): Order[] {
    return this.orders.filter(order => order.userId === userId);
  }

  findAll(): Order[] {
    return this.orders;
  }
}
