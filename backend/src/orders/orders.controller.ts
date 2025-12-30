import { Controller, Get, Post, Body, Request } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post()
  create(@Request() req, @Body() body: { items: any[]; total: number }) {
    const userId = req.ip || 'guest';
    return this.ordersService.create(userId, body.items, body.total);
  }

  @Get()
  getOrders(@Request() req) {
    const userId = req.ip || 'guest';
    return this.ordersService.findByUser(userId);
  }
}
