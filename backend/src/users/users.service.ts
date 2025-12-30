import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
}

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'Admin User',
      email: 'admin@techvault.com',
      password: 'admin123', // In production, use hashed passwords
      role: 'admin',
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      role: 'user',
    },
  ];

  findAll(): User[] {
    return this.users.map(({ password, ...user }) => user) as any;
  }

  findOne(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  findByEmail(email: string): User | undefined {
    return this.users.find(user => user.email === email);
  }

  create(name: string, email: string, password: string): User {
    const newUser: User = {
      id: Date.now(),
      name,
      email,
      password, // In production, hash this password
      role: 'user',
    };
    this.users.push(newUser);
    return newUser;
  }
}
