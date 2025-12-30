import { Injectable } from '@nestjs/common';
import { ProductsService } from '../products/products.service';

export interface CartItem {
  productId: number;
  quantity: number;
  product?: any;
}

@Injectable()
export class CartService {
  private carts: Map<string, CartItem[]> = new Map();

  constructor(private productsService: ProductsService) {}

  getCart(userId: string): CartItem[] {
    const cart = this.carts.get(userId) || [];
    return cart.map(item => ({
      ...item,
      product: this.productsService.findOne(item.productId),
    }));
  }

  addToCart(userId: string, productId: number, quantity: number = 1): CartItem[] {
    const cart = this.carts.get(userId) || [];
    const existingItem = cart.find(item => item.productId === productId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ productId, quantity });
    }

    this.carts.set(userId, cart);
    return this.getCart(userId);
  }

  removeFromCart(userId: string, productId: number): CartItem[] {
    const cart = this.carts.get(userId) || [];
    const updatedCart = cart.filter(item => item.productId !== productId);
    this.carts.set(userId, updatedCart);
    return this.getCart(userId);
  }

  clearCart(userId: string): void {
    this.carts.delete(userId);
  }
}
