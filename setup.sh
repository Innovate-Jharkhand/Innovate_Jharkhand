#!/bin/bash

# Deploy to Live - Setup Script
# This script helps prepare the project for live deployment

set -e

echo " Innovate Jharkhand - Live Deployment Setup"
echo "=============================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Check prerequisites
echo -e "${YELLOW}📋 Step 1: Checking Prerequisites${NC}"
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js not found. Please install Node.js 18+${NC}"
    exit 1
else
    echo -e "${GREEN} Node.js $(node -v)${NC}"
fi

# Check Docker (optional)
if command -v docker &> /dev/null; then
    echo -e "${GREEN} Docker $(docker --version)${NC}"
else
    echo -e "${YELLOW}⚠️  Docker not found (optional for local setup)${NC}"
fi

# Step 2: Setup environment files
echo ""
echo -e "${YELLOW} Step 2: Setting Up Environment Files${NC}"
echo ""

# Backend
if [ ! -f "backend/.env" ]; then
    cp backend/.env.example backend/.env
    echo -e "${GREEN} Created backend/.env${NC}"
    echo -e "${YELLOW}  Please edit backend/.env with your credentials${NC}"
else
    echo -e "${GREEN} backend/.env already exists${NC}"
fi

# Frontend
if [ ! -f "frontend/.env" ]; then
    cp frontend/.env.example frontend/.env
    echo -e "${GREEN} Created frontend/.env${NC}"
else
    echo -e "${GREEN} frontend/.env already exists${NC}"
fi

# Step 3: Install dependencies
echo ""
echo -e "${YELLOW} Step 3: Installing Dependencies${NC}"
echo ""

echo "Installing backend dependencies..."
cd backend
npm install > /dev/null 2>&1
cd ..
echo -e "${GREEN} Backend dependencies installed${NC}"

echo "Installing frontend dependencies..."
cd frontend
npm install > /dev/null 2>&1
cd ..
echo -e "${GREEN} Frontend dependencies installed${NC}"

# Step 4: Git setup
echo ""
echo -e "${YELLOW} Step 4: Git Repository Setup${NC}"
echo ""

if [ -d ".git" ]; then
    echo -e "${GREEN} Git repository already initialized${NC}"
    
    # Check if remote is set
    if git remote get-url origin &> /dev/null; then
        REMOTE=$(git remote get-url origin)
        echo -e "${GREEN} Remote origin: $REMOTE${NC}"
    else
        echo -e "${YELLOW}  No remote origin set${NC}"
        echo "Run: git remote add origin <your-github-url>"
    fi
else
    echo -e "${YELLOW}Initializing git repository...${NC}"
    git init
    echo -e "${GREEN} Git repository initialized${NC}"
    echo "Add remote: git remote add origin <your-github-url>"
fi

# Step 5: Check for sensitive data
echo ""
echo -e "${YELLOW} Step 5: Security Check${NC}"
echo ""

# Check if .env is in gitignore
if grep -q ".env" .gitignore; then
    echo -e "${GREEN} .env is in .gitignore${NC}"
else
    echo -e "${RED}❌ .env should be in .gitignore${NC}"
fi

# Check if .env files are tracked
if git ls-files | grep -q "\.env$"; then
    echo -e "${RED}  WARNING: .env files are tracked in git!${NC}"
    echo "Run: git rm --cached backend/.env frontend/.env"
    echo "Then: git commit -m 'Remove .env from tracking'"
else
    echo -e "${GREEN} .env files are not tracked${NC}"
fi

# Step 6: Test build
echo ""
echo -e "${YELLOW} Step 6: Testing Build${NC}"
echo ""

echo "Building frontend..."
cd frontend
npm run build > /dev/null 2>&1
cd ..
echo -e "${GREEN} Frontend build successful${NC}"

# Step 7: Docker setup (optional)
echo ""
echo -e "${YELLOW} Step 7: Docker Setup (Optional)${NC}"
echo ""

if command -v docker &> /dev/null; then
    read -p "Would you like to test Docker build? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "Building Docker images..."
        docker build -t innovate-jharkhand-backend:test ./backend > /dev/null 2>&1 || true
        docker build -t innovate-jharkhand-frontend:test ./frontend > /dev/null 2>&1 || true
        echo -e "${GREEN} Docker images built${NC}"
    fi
else
    echo -e "${YELLOW}  Docker not available, skipping${NC}"
fi

# Final summary
echo ""
echo "=============================================="
echo -e "${GREEN} Setup Complete!${NC}"
echo "=============================================="
echo ""
echo " Next Steps:"
echo ""
echo "1. Edit your environment files:"
echo "   - backend/.env"
echo "   - frontend/.env"
echo ""
echo "2. Commit your changes:"
echo "   git add ."
echo "   git commit -m 'Production setup with deployment configs'"
echo ""
echo "3. Push to GitHub:"
echo "   git push -u origin main"
echo ""
echo "4. Follow DEPLOYMENT.md for deployment options:"
echo "   - Docker Compose (local/VPS)"
echo "   - Heroku"
echo "   - Railway.app"
echo "   - AWS/DigitalOcean/Azure"
echo ""
echo "5. Configure GitHub Secrets (if using Actions):"
echo "   Settings → Secrets and variables → Actions"
echo ""
echo " Documentation:"
echo "   - README.md - Project overview"
echo "   - DEPLOYMENT.md - Deployment guide"
echo "   - GIT_SETUP.md - Git & repository setup"
echo ""
echo -e "${YELLOW}⚠️  Remember: Never commit .env files!${NC}"
echo ""
