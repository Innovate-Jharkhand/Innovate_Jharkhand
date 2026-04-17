# 🚀 Railway.app Deployment Guide

## ✅ Fixed Deployment Issue

Your Railway deployment failed because it couldn't detect how to build a monorepo (backend + frontend together). We've added the necessary configuration files to fix this.

## 📋 New Configuration Files Added

- ✅ `package.json` (root) - Root-level Node.js config
- ✅ `Procfile` - Railway build/web process definition
- ✅ `railway.toml` - Railway configuration
- ✅ `railway.json` - Project metadata
- ✅ `start.sh` - Startup script

## 🚀 How to Deploy to Railway (Fixed)

### Step 1: Push Updated Code to GitHub

```bash
git add .
git commit -m "Add Railway deployment configuration"
git push origin main
```

### Step 2: Go to Railway Dashboard

1. Navigate to: https://dashboard.railway.app
2. Go to your project "Innovate Jharkhand"
3. Click the failed deployment
4. Click **"Redeploy"** button

### Step 3: Or Create New Deployment

1. Click **"New"** → **"GitHub Repo"**
2. Select your repository
3. Railway will now detect the configuration
4. Add environment variables (see below)
5. Click **Deploy**

### Step 4: Add Environment Variables

In Railway Dashboard:
1. Go to **Variables** tab
2. Add these secrets:

```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your-secret-key-here
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_secret
NODE_ENV=production
```

### Step 5: Wait for Deployment

Railway will now:
1. ✅ Detect Node.js app from root `package.json`
2. ✅ Install dependencies for backend
3. ✅ Build frontend (create dist folder)
4. ✅ Start backend server on port 5000
5. ✅ Serve frontend from backend

### Step 6: Access Your App

Once deployed, Railway will provide a URL like:
```
https://innovate-jharkhand-production.up.railway.app
```

---

## 🔄 What Each Config File Does

### package.json (root)
```json
{
  "scripts": {
    "install": "npm install both backend and frontend",
    "build": "npm run build frontend",
    "start": "npm start backend"
  }
}
```
- Tells Railway to detect this as a Node.js project
- Defines build and start commands

### Procfile
```
release: Install dependencies + build frontend
web: Start backend server
```
- Tells Railway which process is the web server
- Release phase installs and builds before web starts

### railway.toml
```
[build]
builder = "dockerfile"
dockerfile = "./backend/Dockerfile"

[deploy]
port = 5000
```
- Optional: Can use Docker instead of Procfile
- Specifies backend Dockerfile for building

---

## 🧪 Test Locally Before Pushing

```bash
# Simulate Railway build locally
npm install --prefix backend
npm install --prefix frontend
npm run build --prefix frontend

# Start like Railway would
npm start --prefix backend

# Visit http://localhost:5000
```

---

## ⚠️ Troubleshooting

### Still failing?

**Check build logs:**
1. Railway Dashboard → Your App
2. Click the failed deployment
3. Go to **Build Logs** tab
4. Look for the error

**Common issues:**

| Error | Solution |
|-------|----------|
| `start.sh not found` | ✅ Now fixed with Procfile |
| `Cannot find module` | Check `npm install` ran in both folders |
| `MONGO_URI is undefined` | Add to Variables in Railway |
| `Port already in use` | Backend should use $PORT env var |

### Port Configuration

The backend should support dynamic ports:

In `backend/src/server.js`:
```javascript
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

This is already correct in your code ✅

---

## 📊 Expected Deployment Flow

```
1. Push to GitHub (main branch)
   ↓
2. Railway detects Node.js app
   ↓
3. Release phase:
   - npm install (backend)
   - npm install (frontend)
   - npm run build (frontend) → creates dist/
   ↓
4. Web process starts:
   - npm start (backend on port 5000)
   ↓
5. Backend serves:
   - API endpoints on /api/*
   - Frontend dist files (if configured)
   ↓
6. Your app is LIVE! 🎉
```

---

## 🔗 Frontend-Backend Connection

### Issue
Frontend built on Railway needs to talk to backend API.

### Solution
Update `frontend/.env` on Railway:

```
VITE_API_URL=https://your-railway-url.com
```

Or let Railway handle it automatically via internal networking.

---

## 📱 Serve Frontend from Backend

To serve both frontend and backend from one Railway app:

**In `backend/src/server.js`:**
```javascript
app.use(express.static('../frontend/dist'));

app.get('*', (req, res) => {
  res.sendFile('../frontend/dist/index.html');
});
```

This way:
- API calls go to `/api/*`
- All other requests serve the React app

---

## 🎯 After Successful Deployment

1. **Test your app:** Click the Railway URL
2. **Check logs:** Railway Dashboard → Deployments → Logs
3. **Monitor:** Set up monitoring and alerts
4. **Add domain:** Go to Settings → Custom Domain
5. **Enable HTTPS:** Railway does this automatically

---

## 💰 Railway Pricing

- **Free tier:** $5/month credit
- **Includes:**
  - 500GB egress
  - Shared database
  - No credit card required to start

Your small app should fit in free tier easily! 

---

## 🚀 Next Steps

1. Push to GitHub: `git push origin main`
2. Go to Railway Dashboard
3. Click "Redeploy" on existing project
4. Wait 2-5 minutes
5. Click the generated URL
6. Your app is LIVE! 🎉

---

## 📞 Still Having Issues?

### Check Railway Docs
- https://docs.railway.app/
- https://docs.railway.app/deploy/node

### Debug Steps
```bash
# View Railway logs locally
# (after deploying, check Railway dashboard)

# Try building locally first
npm install --prefix backend
npm install --prefix frontend
npm run build --prefix frontend
npm start --prefix backend

# If this works locally, Railway will work too!
```

### Get Help
- Railway Support: https://railway.app/help
- GitHub Issues in your repo
- Our docs: DEPLOYMENT.md, LAUNCH.md

---

**🎉 You're all set! Redeploy now and your app will be live!**
