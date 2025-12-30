# 🚀 TechVault - Deployment Guide

Complete step-by-step guide to deploy your e-commerce platform locally and to the cloud.

---

## 📋 Table of Contents

1. [Local Development Setup](#local-development-setup)
2. [Docker Deployment](#docker-deployment)
3. [Cloud Deployment](#cloud-deployment)
4. [Environment Configuration](#environment-configuration)
5. [Troubleshooting](#troubleshooting)

---

## 🖥️ Local Development Setup

### Step 1: Prerequisites

Ensure you have installed:
- Node.js (v16+)
- npm or yarn
- Git

### Step 2: Frontend Setup

```bash
# Navigate to frontend directory
cd e_commerce

# Install dependencies
npm install

# Start development server
npm run dev
```

✅ Frontend will be available at: `http://localhost:5173`

### Step 3: Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start development server
npm run start:dev
```

✅ Backend API will be available at: `http://localhost:3000/api`

### Step 4: Test the Application

1. Open browser: `http://localhost:5173`
2. Browse products
3. Add items to cart
4. Test checkout flow

---

## 🐳 Docker Deployment

### Prerequisites

- Docker Desktop installed
- Docker Compose installed

### Option 1: Using Docker Compose (Recommended)

```bash
# From root directory (lab7/)
docker-compose up --build
```

This will:
- ✅ Build both frontend and backend images
- ✅ Start both containers
- ✅ Configure networking between them

**Access:**
- Frontend: `http://localhost:3001`
- Backend API: `http://localhost:3000/api`

### Option 2: Individual Containers

#### Build and Run Backend
```bash
cd backend
docker build -t techvault-backend .
docker run -p 3000:3000 --env-file .env techvault-backend
```

#### Build and Run Frontend
```bash
cd e_commerce
docker build -t techvault-frontend .
docker run -p 3001:80 techvault-frontend
```

### Stop Docker Containers

```bash
# Stop all containers
docker-compose down

# Stop and remove volumes
docker-compose down -v

# Clean up everything
docker system prune -a
```

---

## ☁️ Cloud Deployment

### Deploy Backend to Railway/Render

#### Railway Deployment

1. **Sign up** at [Railway.app](https://railway.app)
2. **Create New Project** → Deploy from GitHub repo
3. **Select** `backend` folder
4. **Configure:**
   - Root Directory: `backend`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm run start:prod`
5. **Environment Variables:**
   ```
   PORT=3000
   JWT_SECRET=your-production-secret-key-here
   JWT_EXPIRES_IN=24h
   ```
6. **Deploy!**

#### Render Deployment

1. **Sign up** at [Render.com](https://render.com)
2. **New** → **Web Service**
3. **Connect** GitHub repository
4. **Configuration:**
   - Name: `techvault-backend`
   - Root Directory: `backend`
   - Environment: `Node`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm run start:prod`
   - Instance Type: `Free`
5. **Environment Variables** (same as above)
6. **Create Web Service**

✅ Note your backend URL: `https://your-app.railway.app` or `https://your-app.onrender.com`

---

### Deploy Frontend to Vercel

1. **Sign up** at [Vercel.com](https://vercel.com)
2. **Import** Git Repository
3. **Configure:**
   - Framework Preset: `Vite`
   - Root Directory: `e_commerce`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Environment Variables:**
   ```
   VITE_API_BASE_URL=https://your-backend-url.com/api
   ```
5. **Deploy!**

---

### Deploy Frontend to Netlify

1. **Sign up** at [Netlify.com](https://netlify.com)
2. **Add new site** → Import from Git
3. **Build settings:**
   - Base directory: `e_commerce`
   - Build command: `npm run build`
   - Publish directory: `e_commerce/dist`
4. **Environment Variables:**
   ```
   VITE_API_BASE_URL=https://your-backend-url.com/api
   ```
5. **Deploy!**

---

## 🔧 Environment Configuration

### Frontend Environment Variables (.env)

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

**Production:**
```env
VITE_API_BASE_URL=https://your-backend-domain.com/api
```

### Backend Environment Variables (.env)

```env
PORT=3000
JWT_SECRET=super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=24h
```

**Important:** Always use strong, unique secrets in production!

---

## 🐛 Troubleshooting

### Issue: Port Already in Use

**Windows:**
```bash
netstat -ano | findstr :3000
taskkill /PID <process_id> /F
```

**Linux/Mac:**
```bash
lsof -i :3000
kill -9 <process_id>
```

---

### Issue: CORS Errors

**Solution:** Ensure backend CORS configuration includes frontend URL:

```typescript
// backend/src/main.ts
app.enableCors({
  origin: ['http://localhost:5173', 'https://your-frontend-url.com'],
  credentials: true,
});
```

---

### Issue: Docker Build Fails

**Solution:**
```bash
# Clear Docker cache
docker system prune -a

# Rebuild without cache
docker-compose build --no-cache
docker-compose up
```

---

### Issue: Frontend Can't Connect to Backend

**Check:**
1. ✅ Backend is running (`http://localhost:3000/api/products`)
2. ✅ Frontend `.env` has correct API URL
3. ✅ CORS is properly configured
4. ✅ No firewall blocking the connection

---

### Issue: Module Not Found Errors

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 📊 Performance Optimization

### Frontend Optimization

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Analyze bundle size:**
   ```bash
   npm run build -- --mode production
   ```

### Backend Optimization

1. **Use production mode:**
   ```bash
   npm run build
   npm run start:prod
   ```

2. **Enable compression** (already configured in NestJS)

---

## 🔒 Security Best Practices

### Before Deploying to Production:

1. ✅ Change all default passwords and secrets
2. ✅ Use environment variables for sensitive data
3. ✅ Implement rate limiting
4. ✅ Use HTTPS only
5. ✅ Add proper authentication validation
6. ✅ Implement password hashing (bcrypt)
7. ✅ Add input sanitization
8. ✅ Enable CSRF protection
9. ✅ Set secure HTTP headers
10. ✅ Regular dependency updates

---

## 📈 Monitoring

### Recommended Tools:

- **Frontend:** Vercel Analytics, Google Analytics
- **Backend:** Railway Metrics, Render Metrics, Sentry
- **Logs:** Check platform-specific logging dashboards

---

## 🎯 Quick Commands Reference

```bash
# Start development
npm run dev (frontend)
npm run start:dev (backend)

# Build for production
npm run build

# Run production build
npm run start:prod (backend)

# Docker commands
docker-compose up --build
docker-compose down
docker-compose logs -f

# Clean install
rm -rf node_modules package-lock.json && npm install
```

---

## 📞 Support & Resources

- **Documentation:** See README.md
- **Issues:** Check GitHub repository
- **React Docs:** https://react.dev
- **NestJS Docs:** https://docs.nestjs.com
- **Docker Docs:** https://docs.docker.com

---

## ✅ Deployment Checklist

Before going live:

- [ ] All environment variables configured
- [ ] Backend deployed and accessible
- [ ] Frontend deployed and accessible
- [ ] Frontend connects to backend successfully
- [ ] All pages load correctly
- [ ] Cart functionality works
- [ ] Authentication works
- [ ] Products display properly
- [ ] Responsive on mobile devices
- [ ] HTTPS enabled
- [ ] Error handling works
- [ ] Performance optimized

---

**🎉 Congratulations! Your TechVault e-commerce platform is now deployed!**

---

## 🔄 Continuous Deployment

### Automatic Deployments:

Most platforms support automatic deployments:
- **Push to main branch** → Automatic deployment
- **Pull requests** → Preview deployments
- **Rollback** → Instant rollback to previous versions

---

**Happy Deploying! 🚀**
