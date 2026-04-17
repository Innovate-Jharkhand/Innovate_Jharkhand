# Innovate Jharkhand - Deployment Guide

## Prerequisites

- Docker & Docker Compose (for containerized deployment)
- Node.js 18+ & npm (for local development)
- Git
- MongoDB Atlas account
- Razorpay account (for payment gateway)

## Environment Setup

### 1. Create Environment Files

#### Backend (.env)
Copy from `.env.example` and fill in real credentials:
```bash
cp backend/.env.example backend/.env
```

Edit `backend/.env` with:
```
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/jharkhand_db
JWT_SECRET=your-secure-jwt-secret-key
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
NODE_ENV=production
```

#### Frontend (.env)
```bash
cp frontend/.env.example frontend/.env
```

Edit `frontend/.env` with:
```
VITE_API_URL=https://api.yourdomain.com
VITE_APP_NAME=Innovate Jharkhand
```

## Local Deployment

### Option 1: Docker Compose (Recommended)

```bash
# Build and start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

Access:
- Frontend: http://localhost
- Backend API: http://localhost:5000

### Option 2: Manual Local Setup

**Backend:**
```bash
cd backend
npm install
npm run dev
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

## Production Deployment

### Option 1: Using Docker (Recommended)

1. **Build Docker Images**
```bash
docker build -t innovate-jharkhand-backend:latest ./backend
docker build -t innovate-jharkhand-frontend:latest ./frontend
```

2. **Push to Docker Registry** (Optional - for cloud deployment)
```bash
# Login to Docker Hub or your registry
docker login

docker tag innovate-jharkhand-backend:latest your-registry/innovate-jharkhand-backend:latest
docker push your-registry/innovate-jharkhand-backend:latest

docker tag innovate-jharkhand-frontend:latest your-registry/innovate-jharkhand-frontend:latest
docker push your-registry/innovate-jharkhand-frontend:latest
```

3. **Deploy to Cloud**

#### Heroku Deployment
```bash
# Install Heroku CLI
npm install -g heroku

# Login to Heroku
heroku login

# Create backend app
heroku create innovate-jharkhand-backend
heroku config:set MONGO_URI=your_mongo_uri --app innovate-jharkhand-backend
heroku config:set JWT_SECRET=your_secret --app innovate-jharkhand-backend

# Deploy backend
git subtree push --prefix backend heroku main

# Create frontend app
heroku create innovate-jharkhand-frontend
heroku config:set VITE_API_URL=https://innovate-jharkhand-backend.herokuapp.com --app innovate-jharkhand-frontend

# Deploy frontend
git subtree push --prefix frontend heroku main
```

#### AWS / DigitalOcean / Azure Deployment

Use Docker images with:
- **AWS**: ECS, ECR, AppRunner
- **DigitalOcean**: App Platform
- **Azure**: Container Instances, App Service

### Option 2: Vercel (Frontend Only)

```bash
npm install -g vercel
cd frontend
vercel --prod
```

### Option 3: Railway.app (Full Stack)

1. Connect GitHub repository
2. Create services for backend and frontend
3. Set environment variables in Railway dashboard
4. Deploy automatically

## Secrets & Credentials

⚠️ **IMPORTANT**: Never commit sensitive data!

### What NOT to commit:
- `.env` files (all of them)
- API keys
- Database credentials
- JWT secrets

### GitHub Secrets Setup

1. Go to Repository → Settings → Secrets and variables
2. Add these secrets:
   - `MONGO_URI`
   - `JWT_SECRET`
   - `RAZORPAY_KEY_ID`
   - `RAZORPAY_KEY_SECRET`

## Booking Files Management

Bookings are stored in `backend/bookings/` organized by date:
```
bookings/
├── 2024-04-17/
│   ├── BK*.json (individual bookings)
│   └── bookings_summary.csv (daily summary)
```

For production, consider:
- Uploading to cloud storage (AWS S3)
- Backing up daily
- Setting retention policies

## Database Backup

### MongoDB Atlas (Cloud)
- Automatic backups enabled
- Manual backup in Atlas dashboard

### Local Backup
```bash
mongodump --uri "your_mongo_uri" --out ./backup
```

## Monitoring & Logs

### Docker Logs
```bash
docker-compose logs -f backend
docker-compose logs -f frontend
```

### Production Logs
- Use cloud provider's logging (CloudWatch, Stackdriver)
- Set up monitoring (Sentry for error tracking)
- Enable application logging in backend

## Scaling

For high traffic:

1. **Database**: Enable MongoDB Atlas Auto-scaling
2. **Backend**: Use load balancer with multiple instances
3. **Frontend**: Use CDN (CloudFlare, AWS CloudFront)
4. **Caching**: Implement Redis caching

## Security Checklist

- [ ] HTTPS/SSL enabled
- [ ] Environment variables secured
- [ ] Database credentials rotated
- [ ] API keys from Razorpay are production keys
- [ ] CORS configured properly
- [ ] Rate limiting enabled
- [ ] Input validation on all endpoints
- [ ] Error messages don't expose sensitive info

## Troubleshooting

### Backend won't start
```bash
# Check logs
docker-compose logs backend

# Verify environment variables
echo $MONGO_URI
```

### Frontend can't connect to backend
- Check `VITE_API_URL` environment variable
- Verify backend is running on specified port
- Check CORS settings in backend

### Payment gateway not working
- Verify Razorpay credentials
- Check if using test keys (sandbox) or live keys
- Review Razorpay test card numbers

## Support & Maintenance

For issues:
1. Check application logs
2. Review GitHub Issues
3. Contact development team

## Next Steps

- Set up CI/CD pipeline (GitHub Actions)
- Configure automated testing
- Set up performance monitoring
- Plan disaster recovery
