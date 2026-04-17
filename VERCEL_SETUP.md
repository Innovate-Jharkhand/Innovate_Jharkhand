# 🚀 Vercel Deployment Guide

## Quick Start

### Step 1: Connect GitHub to Vercel
1. Go to https://vercel.com
2. Click **"New Project"**
3. Select your GitHub repository
4. Click **"Import"**

### Step 2: Add Environment Variables
In Vercel dashboard:

```
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/db
JWT_SECRET=your-secret-key-32-chars-min
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
NODE_ENV=production
```

### Step 3: Deploy
Click **"Deploy"** and wait 1-2 minutes.

---

## What Happens

✅ Vercel automatically:
- Installs frontend dependencies
- Builds React app (creates `dist/`)
- Serves frontend from CDN
- Routes `/api/*` to backend
- Sets environment variables

---

## Access Your App

After deployment, Vercel gives you a URL like:
```
https://innovate-jharkhand.vercel.app
```

---

## Update Your Frontend API URL

In `frontend/.env`:
```
VITE_API_URL=https://innovate-jharkhand.vercel.app
```

---

## That's it! 🎉

Vercel handles the rest. Your app is live!
