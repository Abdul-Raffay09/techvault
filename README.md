# 🛍️ TechVault - Modern E-Commerce Platform

A full-stack e-commerce platform built with **React (Vite)** and **NestJS**, featuring a modern glassmorphism UI, complete shopping cart functionality, and Docker containerization.

---

## 🎯 Project Overview

TechVault is a premium tech marketplace designed as a comprehensive full-stack application. This project demonstrates modern web development practices, including:

- ✨ **Modern UI/UX** with glassmorphism design and smooth animations
- 🏗️ **Clean architecture** with separation of concerns
- 🔒 **JWT-based authentication** (in-memory storage)
- 🛒 **Complete shopping cart** functionality
- 🐳 **Docker containerization** for easy deployment
- 📱 **Fully responsive** design for all devices

---

## 🛠️ Tech Stack

### Frontend
- **React 19** with Vite for lightning-fast development
- **React Router DOM** for navigation
- **Custom CSS** with modern design patterns
- **Responsive Design** - Mobile-first approach

### Backend
- **NestJS** - Progressive Node.js framework
- **JWT Authentication** with Passport
- **Class Validator** for DTO validation
- **In-memory data storage** (no database required)
- **RESTful API** architecture

### DevOps
- **Docker** for containerization
- **Docker Compose** for multi-container orchestration
- **Nginx** for frontend serving in production

---

## 📁 Project Structure

```
lab7/
├── e_commerce/                 # Frontend Application
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── Loader.jsx
│   │   ├── pages/             # Page components
│   │   │   ├── HomePage.jsx
│   │   │   ├── ProductsPage.jsx
│   │   │   ├── ProductDetailsPage.jsx
│   │   │   ├── CartPage.jsx
│   │   │   ├── CheckoutPage.jsx
│   │   │   ├── AddProductPage.jsx (Admin)
│   │   │   └── NotFoundPage.jsx
│   │   ├── services/          # API service layer
│   │   │   └── api.js
│   │   ├── data/              # Mock data
│   │   │   └── products.js
│   │   ├── App.jsx            # Main app component
│   │   └── main.jsx           # Entry point
│   ├── Dockerfile             # Frontend Docker configuration
│   ├── nginx.conf             # Nginx configuration
│   └── package.json
│
├── backend/                    # Backend Application
│   ├── src/
│   │   ├── auth/              # Authentication module
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── jwt.strategy.ts
│   │   │   └── local.strategy.ts
│   │   ├── users/             # Users module
│   │   │   ├── users.service.ts
│   │   │   └── users.module.ts
│   │   ├── products/          # Products module
│   │   │   ├── products.controller.ts
│   │   │   ├── products.service.ts
│   │   │   └── dto/
│   │   ├── cart/              # Shopping cart module
│   │   │   ├── cart.controller.ts
│   │   │   └── cart.service.ts
│   │   ├── orders/            # Orders module
│   │   │   ├── orders.controller.ts
│   │   │   └── orders.service.ts
│   │   ├── app.module.ts      # Root module
│   │   └── main.ts            # Entry point
│   ├── Dockerfile             # Backend Docker configuration
│   ├── tsconfig.json
│   └── package.json
│
├── docker-compose.yml          # Multi-container setup
└── README.md                   # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Docker** and **Docker Compose** (for containerized deployment)

---

## 💻 Local Development

### Frontend Setup

```bash
cd e_commerce
npm install
npm run dev
```

Frontend will run on: `http://localhost:5173`

### Backend Setup

```bash
cd backend
npm install
npm run start:dev
```

Backend will run on: `http://localhost:3000/api`

---

## 🐳 Docker Deployment

### Build and Run with Docker Compose

```bash
# From the root directory (lab7/)
docker-compose up --build
```

This will:
- Build the backend and frontend Docker images
- Start both containers
- Frontend accessible at: `http://localhost:3001`
- Backend API at: `http://localhost:3000/api`

### Individual Container Commands

#### Backend Only
```bash
cd backend
docker build -t ecommerce-backend .
docker run -p 3000:3000 ecommerce-backend
```

#### Frontend Only
```bash
cd e_commerce
docker build -t ecommerce-frontend .
docker run -p 3001:80 ecommerce-frontend
```

### Stop Containers
```bash
docker-compose down
```

---

## 📡 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create new product (admin)
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `DELETE /api/cart/remove` - Remove item from cart
- `DELETE /api/cart/clear` - Clear entire cart

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create new order

---

## 🌐 Cloud Deployment

### Deploy Backend (Railway/Render)

1. **Create a new project** on Railway or Render
2. **Connect your Git repository**
3. **Set environment variables:**
   ```
   PORT=3000
   JWT_SECRET=your-secret-key
   JWT_EXPIRES_IN=24h
   ```
4. **Use the Dockerfile** for build configuration
5. **Deploy!**

### Deploy Frontend (Vercel/Netlify)

1. **Connect repository** to Vercel/Netlify
2. **Build settings:**
   - Build command: `npm run build`
   - Output directory: `dist`
3. **Environment variables:**
   ```
   VITE_API_BASE_URL=https://your-backend-url.com/api
   ```
4. **Deploy!**

---

## 🎨 Features

### Frontend
- ✨ Modern glassmorphism UI design
- 🎭 Smooth animations and transitions
- 📱 Fully responsive layout
- 🔍 Product search and filtering
- 🛒 Real-time cart updates
- ⭐ Product ratings and reviews
- 🏷️ Category-based navigation
- 💳 Checkout flow

### Backend
- 🔐 JWT-based authentication
- ✅ DTO validation with class-validator
- 🗂️ In-memory data storage
- 🛡️ Guard-protected routes
- 📊 RESTful API design
- 🚀 Fast and lightweight

---

## 🔑 Default Credentials

### Admin User
- Email: `admin@techvault.com`
- Password: `admin123`

### Regular User
- Email: `john@example.com`
- Password: `password123`

---

## 🧪 Testing

### Test Backend API
```bash
# Get all products
curl http://localhost:3000/api/products

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@techvault.com","password":"admin123"}'
```

---

## 📝 Environment Variables

### Frontend (.env)
```
VITE_API_BASE_URL=http://localhost:3000/api
```

### Backend (.env)
```
PORT=3000
JWT_SECRET=your-secret-key-change-in-production
JWT_EXPIRES_IN=24h
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:3000 | xargs kill -9
```

### Docker Issues
```bash
# Clean up Docker
docker-compose down -v
docker system prune -a

# Rebuild
docker-compose up --build --force-recreate
```

### CORS Errors
Ensure backend CORS configuration includes your frontend URL in `main.ts`

---

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [NestJS Documentation](https://docs.nestjs.com)
- [Docker Documentation](https://docs.docker.com)
- [Vite Documentation](https://vitejs.dev)

---

## 🤝 Contributing

This is a university lab project, but suggestions are welcome!

---

## 📄 License

ISC License

---

## 👨‍💻 Author

Built with ❤️ as a university project demonstrating full-stack development skills.

---

## 🎓 Project Purpose

This project was created for educational purposes to demonstrate:
- Modern frontend development with React
- Backend development with NestJS
- RESTful API design
- Docker containerization
- Full-stack application architecture
- Clean code practices

---

## ⚠️ Important Notes

- **No Database**: This project uses in-memory storage for simplicity
- **Production**: For production use, implement proper database, password hashing, and security measures
- **Authentication**: Current auth is simplified for educational purposes

---

## 🎯 Future Enhancements

- [ ] Add database integration (PostgreSQL/MongoDB)
- [ ] Implement proper password hashing (bcrypt)
- [ ] Add payment gateway integration
- [ ] Implement email notifications
- [ ] Add admin dashboard
- [ ] Implement product reviews
- [ ] Add wishlist functionality

---

**Happy Coding! 🚀**
