# ⚡ TechVault - Quick Start Guide

## 🚀 Get Started in 2 Minutes

### Option 1: Run Locally (Recommended for Development)

#### Step 1: Start Frontend
```bash
cd e_commerce
npm install    # First time only
npm run dev
```
✅ Frontend: http://localhost:5173

#### Step 2: Start Backend (New Terminal)
```bash
cd backend
npm install    # First time only
npm run start:dev
```
✅ Backend: http://localhost:3000/api

---

### Option 2: Run with Docker

```bash
docker-compose up --build
```
✅ Frontend: http://localhost:3001
✅ Backend: http://localhost:3000/api

---

## 🎯 What to Do Next

1. **Browse Products** → http://localhost:5173
2. **Add to Cart** → Click "Add to Cart" on any product
3. **View Cart** → Click cart icon in navbar
4. **Checkout** → Complete your order
5. **Admin Panel** → Add new products at `/admin`

---

## 🔑 Login Credentials

**Admin Account:**
- Email: `admin@techvault.com`
- Password: `admin123`

**Regular User:**
- Email: `john@example.com`
- Password: `password123`

---

## 📡 Test API

```bash
# Get all products
curl http://localhost:3000/api/products

# Get single product
curl http://localhost:3000/api/products/1
```

---

## 🐛 Common Issues

**Port already in use?**
```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Kill process on port 5173
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

**Modules not found?**
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Full Documentation

- **README.md** - Complete project documentation
- **DEPLOYMENT.md** - Deployment instructions
- **PROJECT_SUMMARY.md** - What was built

---

**That's it! You're ready to go! 🎉**
