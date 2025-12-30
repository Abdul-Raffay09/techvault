# Deployment Instructions

## Quick Deploy to Render (via GitHub)

### Prerequisites
1. Create a GitHub account at https://github.com
2. Create a new repository called "techvault-ecommerce"
3. Follow the steps below

### Upload to GitHub

1. Install Git from: https://git-scm.com/download/win
2. Restart PowerShell after installation
3. Run these commands:

```powershell
cd c:\Users\Rafay\Desktop\lab7\lab7

# Configure Git (first time only)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Initialize repository
git init
git add .
git commit -m "Initial commit - TechVault E-Commerce"

# Connect to GitHub (replace with your username)
git remote add origin https://github.com/YOUR-USERNAME/techvault-ecommerce.git
git branch -M main
git push -u origin main
```

### Deploy Backend on Render

1. Go to https://render.com
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: techvault-backend
   - **Root Directory**: backend
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start:prod`
   - **Instance Type**: Free

5. Add Environment Variables:
   - `JWT_SECRET`: (click "Generate" or use a random string)
   - `JWT_EXPIRES_IN`: 24h
   - `PORT`: 3000
   - `NODE_ENV`: production

6. Click "Create Web Service"
7. Wait 5-10 minutes for deployment
8. Copy your backend URL (e.g., https://techvault-backend.onrender.com)

### Deploy Frontend on Render

1. Click "New +" → "Static Site"
2. Connect your GitHub repository
3. Configure:
   - **Name**: techvault-frontend
   - **Root Directory**: e_commerce
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: dist

4. Add Environment Variable:
   - `VITE_API_BASE_URL`: https://your-backend-url.onrender.com/api

5. Click "Create Static Site"
6. Done! Your app is live ✅

### Deploy Frontend on Vercel (Alternative)

1. Go to https://vercel.com
2. Import your GitHub repository
3. Configure:
   - **Framework**: Vite
   - **Root Directory**: e_commerce
   - **Build Command**: npm run build
   - **Output Directory**: dist

4. Add Environment Variable:
   - `VITE_API_BASE_URL`: https://your-backend-url.onrender.com/api

5. Deploy!

## Without GitHub (Railway CLI Method)

Install Railway CLI:
```powershell
npm install -g @railway/cli
```

Deploy backend:
```powershell
cd c:\Users\Rafay\Desktop\lab7\lab7\backend
railway login
railway init
railway up
railway variables set JWT_SECRET=your-secret-key
railway variables set JWT_EXPIRES_IN=24h
```

Deploy frontend:
```powershell
cd c:\Users\Rafay\Desktop\lab7\lab7\e_commerce
railway init
railway up
railway variables set VITE_API_BASE_URL=https://your-backend.railway.app/api
```

## Troubleshooting

### Backend won't start
- Check environment variables are set correctly
- Ensure JWT_SECRET is set
- Check logs in Render dashboard

### Frontend can't connect to backend
- Verify VITE_API_BASE_URL is correct
- Check backend CORS settings allow your frontend domain
- Test backend API directly: https://your-backend.com/api/products

### CORS errors
Backend should allow your frontend domain. Check src/main.ts:
```typescript
app.enableCors({
  origin: ['http://localhost:5173', 'https://your-frontend.com'],
  credentials: true,
});
```

## Support

For detailed deployment guide, see DEPLOYMENT.md in the root directory.
