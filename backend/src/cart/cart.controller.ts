import { Controller, Get, Post, Delete, Body, Request, UseGuards } from '@nestjs/common';
import { CartService, CartItem } from './cart.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @Get()
  getCart(@Request() req): CartItem[] {
    const userId = req.ip || 'guest';
    return this.cartService.getCart(userId);
  }

  @Post('add')
  addToCart(@Request() req, @Body() body: { productId: number; quantity?: number }): CartItem[] {
    const userId = req.ip || 'guest';
    return this.cartService.addToCart(userId, body.productId, body.quantity || 1);
  }

  @Delete('remove')
  removeFromCart(@Request() req, @Body() body: { productId: number }): CartItem[] {
    const userId = req.ip || 'guest';
    return this.cartService.removeFromCart(userId, body.productId);
  }

  @Delete('clear')
  clearCart(@Request() req) {
    const userId = req.ip || 'guest';
    this.cartService.clearCart(userId);
    return { message: 'Cart cleared successfully' };
  }
}
