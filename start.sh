#!/bin/bash
set -e

echo "🚀 Starting Innovate Jharkhand..."

# Start backend
cd backend
npm install
npm start &
BACKEND_PID=$!

# Start frontend build and serve
cd ../frontend
npm install
npm run build
npx serve -s dist -l 3000 &
FRONTEND_PID=$!

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID
