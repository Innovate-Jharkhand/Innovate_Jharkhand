# 🚀 QUICK COMMAND REFERENCE

## Setup (Copy & Paste These)

### Windows PowerShell:
```powershell
# Setup files
copy backend\.env.example backend\.env
copy frontend\.env.example frontend\.env
notepad backend\.env  # Edit with credentials

# Install & test
npm install --prefix backend
npm install --prefix frontend

# Test locally
Start-Process { npm run dev --prefix backend }
Start-Process { npm run dev --prefix frontend }

# Test with Docker
docker-compose up -d
docker-compose logs -f

# Push to GitHub
git add .
git commit -m "Production deployment setup"
git push origin main
```

### Mac/Linux:
```bash
# Setup files
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
nano backend/.env  # Edit with credentials

# Install & test
npm install --prefix backend
npm install --prefix frontend

# Test locally
(npm run dev --prefix backend) &
(npm run dev --prefix frontend) &

# Test with Docker
docker-compose up -d
docker-compose logs -f

# Push to GitHub
git add .
git commit -m "Production deployment setup"
git push origin main
```

## Verification Commands

```bash
# Check .env is ignored
git status
# Should NOT show .env files

# Check no credentials leaked
grep -r "mongodb+srv://" backend/src/
grep -r "RAZORPAY" frontend/src/

# Verify Docker builds
docker build ./backend
docker build ./frontend

# Check app locally
curl http://localhost:5000
# Visit http://localhost:5173 in browser
```

## Deployment Commands

### Railway.app
```bash
# 1. Go to https://railway.app
# 2. Connect GitHub repo
# 3. Add environment variables
# 4. Deploy!
# Visit: https://your-project.railway.app
```

### Heroku
```bash
npm install -g heroku
heroku login
heroku create your-app-name
heroku config:set MONGO_URI=your_uri --app your-app-name
heroku config:set JWT_SECRET=your_secret --app your-app-name
heroku config:set RAZORPAY_KEY_ID=your_key --app your-app-name
heroku config:set RAZORPAY_KEY_SECRET=your_secret --app your-app-name
git push heroku main
```

### Docker VPS
```bash
# On your VPS/server:
git clone https://github.com/yourusername/repo.git
cd repo
docker-compose up -d

# Check status
docker-compose logs -f
docker-compose ps
```

## Troubleshooting

```bash
# Backend won't connect to MongoDB
# Check MONGO_URI in backend/.env

# Frontend can't reach backend
# Check VITE_API_URL in frontend/.env
# Verify backend is running: curl http://localhost:5000

# Docker fails to build
docker-compose down -v
docker-compose build --no-cache

# Need to check logs
docker-compose logs backend
docker-compose logs frontend

# Need to restart services
docker-compose restart

# Stop everything
docker-compose down
```

## Important Files to Remember

```
.env              ← Credentials (NEVER commit!)
.env.example      ← Template (OK to commit)
.gitignore        ← Hides .env files
docker-compose.yml ← Full-stack setup
backend/bookings/ ← Booking data (NOT in Git)
DEPLOYMENT.md     ← Full deployment guide
LAUNCH.md         ← Quick launch guide
```

## Environment Variables Needed

### Backend
```
MONGO_URI=
JWT_SECRET=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
```

### Frontend
```
VITE_API_URL=http://localhost:5000
```

## Status Checks

```bash
# Is Git set up?
git remote -v

# Are credentials hidden?
git status | grep "\.env"

# Is build working?
npm run build --prefix frontend

# Are there errors?
npm run dev --prefix backend 2>&1 | grep -i error
```

## One-Liner Deploy

```bash
# Full setup + push to GitHub
git add . && git commit -m "Production deployment" && git push origin main
```

---

**Keep this handy!** 📋
